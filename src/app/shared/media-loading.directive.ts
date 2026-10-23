import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MEDIA_MANIFEST } from './media-manifest';

/** Native loading, decoded-image reveal, and resets when a source changes. */
@Directive({ selector: 'img, iframe, video' })
export class MediaLoadingDirective implements OnInit, AfterViewInit, OnDestroy {
  private sourceObserver?: MutationObserver;
  private revision = 0;
  private destroyed = false;
  private retryButton?: HTMLButtonElement;
  private spinner?: HTMLElement;
  private fallbackAlt = false;
  private removeRetryListener?: () => void;
  @HostBinding('class.media-loading') loading = true;
  @HostBinding('class.media-error') failed = false;
  @HostBinding('attr.aria-busy') get busy(): string | null { return this.loading ? 'true' : null; }

  constructor(private readonly element: ElementRef<HTMLImageElement | HTMLIFrameElement | HTMLVideoElement>, private readonly renderer: Renderer2) {}

  ngOnInit(): void {
    const media = this.element.nativeElement;
    if (media.parentElement?.classList.contains('media-player')) this.createSpinner();
    else if (media instanceof HTMLIFrameElement && media.parentElement) this.renderer.addClass(media.parentElement, 'media-frame');
    if (!(media instanceof HTMLImageElement)) return;
    const source = media.dataset['mediaSrc'];
    if (!source) return;
    const metadata = MEDIA_MANIFEST[source.replace(/^\//, '')];
    if (metadata) {
      if (!media.hasAttribute('width')) media.width = metadata.width;
      if (!media.hasAttribute('height')) media.height = metadata.height;
    }
    if (!media.closest('.book')) this.requestImage();
  }

  @HostListener('media-request')
  requestImage(): void {
    const media = this.element.nativeElement;
    if (!(media instanceof HTMLImageElement) || media.hasAttribute('src')) return;
    const source = media.dataset['mediaSrc'];
    if (!source) return;
    const metadata = MEDIA_MANIFEST[source.replace(/^\//, '')];
    if (!media.hasAttribute('loading')) media.loading = media.closest('.book') ? 'eager' : 'lazy';
    media.decoding = 'async';
    if (metadata?.srcset) {
      media.sizes = media.closest('.book') ? '(max-width: 600px) 90vw, 70vw' : '(max-width: 600px) 100vw, 80vw';
      media.srcset = metadata.srcset;
    }
    media.src = metadata?.src ?? source;
  }

  @HostListener('loadstart')
  onLoadStart(): void {
    this.revision++;
    this.loading = true;
    this.failed = false;
    if (this.spinner) this.spinner.hidden = false;
    this.removeRetry();
  }

  ngAfterViewInit(): void {
    const media = this.element.nativeElement;
    if (media instanceof HTMLImageElement) {
      // Flip books use transformed/hidden pages: native lazy loading can miss them.
      if (!media.hasAttribute('loading') && !media.closest('.book, .flip-book')) media.loading = 'lazy';
      media.decoding = 'async';
      if (media.complete && media.getAttribute('src')) {
        Promise.resolve().then(() => media.naturalWidth ? this.onLoad() : this.finish(true));
      }
      this.sourceObserver = new MutationObserver(() => {
        this.onLoadStart();
        if (media.complete && media.getAttribute('src')) {
          if (media.naturalWidth) this.onLoad();
          else this.finish(true);
        }
      });
      this.sourceObserver.observe(media, { attributes: true, attributeFilter: ['src', 'srcset', 'sizes'] });
    } else if (media instanceof HTMLIFrameElement) {
      if (!media.hasAttribute('loading')) media.setAttribute('loading', 'lazy');
      if (!media.title) media.title = 'Nội dung học tập';
      this.sourceObserver = new MutationObserver(() => this.onLoadStart());
      this.sourceObserver.observe(media, { attributes: true, attributeFilter: ['src'] });
    } else if (media.readyState >= 2) {
      this.finish();
    }
  }

  @HostListener('load')
  @HostListener('loadeddata')
  onLoad(): void {
    const media = this.element.nativeElement;
    const revision = this.revision;
    if (media instanceof HTMLImageElement && media.naturalWidth && typeof media.decode === 'function') {
      media.decode().then(() => {
        if (!this.destroyed && revision === this.revision) this.finish();
      }).catch(() => {
        if (!this.destroyed && revision === this.revision) this.finish(true);
      });
    } else this.finish();
  }

  @HostListener('error')
  onError(): void { this.revision++; this.finish(true); }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.revision++;
    this.sourceObserver?.disconnect();
    this.removeRetry();
    this.spinner?.remove();
  }

  private finish(failed = false): void {
    if (this.destroyed) return;
    this.loading = false;
    this.failed = failed;
    if (this.spinner) this.spinner.hidden = true;
    const media = this.element.nativeElement;
    if (media instanceof HTMLImageElement) {
      if (failed && !media.alt) {
        this.fallbackAlt = true;
        media.alt = 'Không tải được hình ảnh';
      } else if (!failed && this.fallbackAlt) {
        if (media.alt === 'Không tải được hình ảnh') media.alt = '';
        this.fallbackAlt = false;
      }
    }
    if (failed && (media instanceof HTMLImageElement || media instanceof HTMLIFrameElement) && media.parentElement) this.offerRetry();
    else this.removeRetry();
  }

  private createSpinner(): void {
    const spinner: HTMLElement = this.renderer.createElement('span');
    spinner.className = 'media-spinner';
    spinner.setAttribute('role', 'status');
    const label: HTMLElement = this.renderer.createElement('span');
    label.className = 'visually-hidden';
    label.textContent = 'Đang tải video';
    this.renderer.appendChild(spinner, label);
    this.renderer.appendChild(this.element.nativeElement.parentElement, spinner);
    this.spinner = spinner;
  }

  private offerRetry(): void {
    if (this.retryButton) return;
    const media = this.element.nativeElement;
    const button: HTMLButtonElement = this.renderer.createElement('button');
    button.type = 'button';
    button.className = 'media-retry';
    button.textContent = 'Thử tải lại';
    button.setAttribute('aria-label', 'Thử tải lại hình ảnh');
    if (media.closest('.book')) {
      const hidden = media.parentElement?.querySelector('label')?.getAttribute('aria-hidden') === 'true';
      button.tabIndex = hidden ? -1 : 0;
      button.setAttribute('aria-hidden', String(hidden));
    }
    this.removeRetryListener = this.renderer.listen(button, 'click', (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (media instanceof HTMLIFrameElement) {
        this.onLoadStart();
        media.src = media.src;
        return;
      }
      if (!(media instanceof HTMLImageElement)) return;
      const source = media.currentSrc || media.src;
      this.onLoadStart();
      // Retry the selected size instead of fetching every responsive candidate.
      media.removeAttribute('srcset');
      const url = new URL(source, document.baseURI);
      url.searchParams.set('media-retry', String(Date.now()));
      media.src = url.href;
      const book = media.closest<HTMLElement>('.book');
      if (book) book.focus({ preventScroll: true });
      else {
        media.setAttribute('tabindex', '-1');
        media.focus({ preventScroll: true });
      }
    });
    this.renderer.insertBefore(media.parentElement, button, media.nextSibling);
    this.retryButton = button;
  }

  private removeRetry(): void {
    this.removeRetryListener?.();
    this.removeRetryListener = undefined;
    this.retryButton?.remove();
    this.retryButton = undefined;
  }
}
