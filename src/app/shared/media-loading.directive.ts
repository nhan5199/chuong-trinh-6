import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

/** Native loading without observers or per-image Angular subscriptions. */
@Directive({ selector: 'img, iframe, video' })
export class MediaLoadingDirective implements AfterViewInit {
  @HostBinding('class.media-loading') loading = true;
  @HostBinding('class.media-error') failed = false;
  @HostBinding('attr.aria-busy') get busy(): string | null { return this.loading ? 'true' : null; }

  constructor(private readonly element: ElementRef<HTMLImageElement | HTMLIFrameElement | HTMLVideoElement>) {}

  @HostListener('loadstart')
  onLoadStart(): void {
    this.loading = true;
    this.failed = false;
  }

  ngAfterViewInit(): void {
    const media = this.element.nativeElement;
    if (media instanceof HTMLImageElement) {
      // Flip books use transformed/hidden pages: native lazy loading can miss them.
      if (!media.hasAttribute('loading') && !media.closest('.book, .flip-book')) media.loading = 'lazy';
      media.decoding = 'async';
      if (media.complete && media.getAttribute('src')) {
        Promise.resolve().then(() => this.finish(media.naturalWidth === 0));
      }
    } else if (media instanceof HTMLIFrameElement) {
      if (!media.hasAttribute('loading')) media.setAttribute('loading', 'lazy');
      if (!media.title) media.title = 'Nội dung học tập';
    } else if (media.readyState >= 2) {
      this.finish();
    }
  }

  @HostListener('load')
  @HostListener('loadeddata')
  onLoad(): void { this.finish(); }

  @HostListener('error')
  onError(): void { this.finish(true); }

  private finish(failed = false): void {
    this.loading = false;
    this.failed = failed;
    const media = this.element.nativeElement;
    if (failed && media instanceof HTMLImageElement && !media.alt) media.alt = 'Không tải được hình ảnh';
  }
}
