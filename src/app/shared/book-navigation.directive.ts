import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnDestroy } from '@angular/core';

@Directive({ selector: '.book' })
export class BookNavigationDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.tabindex') tabindex = 0;
  @HostBinding('attr.aria-label') label = 'Sách lật trang. Dùng phím mũi tên trái và phải để chuyển trang.';
  constructor(private readonly element: ElementRef<HTMLElement>) {}
  private image?: HTMLImageElement;
  private pages: HTMLInputElement[] = [];
  private sheets: HTMLElement[] = [];
  private storageKey = '';
  private readonly sizeBook = () => {
    const width = this.image?.naturalWidth || Number(this.image?.getAttribute('width'));
    const height = this.image?.naturalHeight || Number(this.image?.getAttribute('height'));
    if (width && height) {
      this.element.nativeElement.style.setProperty('--spread-ratio', String(2 * width / height));
    }
  };

  ngAfterViewInit(): void {
    const book = this.element.nativeElement;
    this.sheets = Array.from(book.querySelectorAll<HTMLElement>('.flip-book > .flip'));
    this.pages = this.sheets.map(sheet => sheet.querySelector<HTMLLabelElement>('label.next-btn, label.back-btn')?.control)
      .filter((control): control is HTMLInputElement => control instanceof HTMLInputElement && book.contains(control));
    this.image = this.element.nativeElement.querySelector<HTMLImageElement>('img') ?? undefined;
    this.image?.addEventListener('load', this.sizeBook);
    this.sizeBook();
    this.storageKey = `dong-nai:reader:${location.pathname}:${this.image?.dataset['mediaSrc'] ?? ''}`;
    try {
      const saved = Number(localStorage.getItem(this.storageKey));
      if (Number.isInteger(saved) && saved >= 0 && saved <= this.pages.length) {
        this.pages.forEach((page, index) => page.checked = index < saved);
      }
    } catch { /* Reading remains available when browser storage is disabled. */ }
    book.querySelectorAll<HTMLLabelElement>('label.next-btn, label.back-btn').forEach(label => {
      label.setAttribute('role', 'button');
      label.setAttribute('aria-label', label.classList.contains('next-btn') ? 'Trang sau' : 'Trang trước');
    });
    this.loadNearby();
  }

  ngOnDestroy(): void { this.image?.removeEventListener('load', this.sizeBook); }

  @HostListener('change')
  pageChanged(): void {
    this.loadNearby();
    const focused = document.activeElement;
    if (focused instanceof HTMLElement && this.element.nativeElement.contains(focused) && focused.matches('[aria-hidden="true"]')) {
      this.element.nativeElement.focus({ preventScroll: true });
    }
    try { localStorage.setItem(this.storageKey, String(this.currentPage())); } catch { /* Optional persistence. */ }
  }

  private currentPage(): number {
    const firstUnchecked = this.pages.findIndex(page => !page.checked);
    return firstUnchecked < 0 ? this.pages.length : firstUnchecked;
  }

  private loadNearby(): void {
    const current = this.currentPage();
    this.sheets.forEach((sheet, index) => {
      sheet.classList.toggle('media-nearby', index >= current - 2 && index <= current + 1);
      sheet.querySelectorAll<HTMLLabelElement>('label.next-btn, label.back-btn').forEach(label => {
        const visible = label.classList.contains('next-btn') ? index === current : index === current - 1;
        label.tabIndex = visible ? 0 : -1;
        label.setAttribute('aria-hidden', String(!visible));
      });
      sheet.querySelectorAll<HTMLButtonElement>('button.media-retry').forEach(button => {
        const visible = button.parentElement?.classList.contains('front') ? index === current : index === current - 1;
        button.tabIndex = visible ? 0 : -1;
        button.setAttribute('aria-hidden', String(!visible));
      });
    });
    // Current left/right pages plus the sheets used by the next/previous turn.
    for (let index = Math.max(0, current - 2); index <= Math.min(this.sheets.length - 1, current + 1); index++) {
      this.sheets[index].querySelectorAll<HTMLImageElement>('img[data-media-src]').forEach(image => {
        const visible = (index === current && image.parentElement?.classList.contains('front')) ||
          (index === current - 1 && image.parentElement?.classList.contains('back'));
        image.setAttribute('fetchpriority', visible ? 'high' : 'low');
        image.dispatchEvent(new Event('media-request'));
      });
    }
  }

  @HostListener('click', ['$event'])
  turnPage(event: MouseEvent): void {
    const label = (event.target as HTMLElement).closest<HTMLLabelElement>('label.next-btn, label.back-btn');
    if (!label || !this.element.nativeElement.contains(label)) return;
    if (label.getAttribute('aria-hidden') === 'true') { event.preventDefault(); return; }
    const input = label.control;
    if (input instanceof HTMLInputElement) {
      event.preventDefault();
      input.click();
    }
  }

  @HostListener('keydown', ['$event'])
  navigate(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    if (target.closest('.media-retry')) return;
    const label = target.closest<HTMLLabelElement>('label.next-btn, label.back-btn');
    if (label && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      label.control?.click();
      return;
    }
    if (event.key === 'Home') {
      event.preventDefault();
      this.pages.forEach(page => page.checked = false);
      this.pageChanged();
      return;
    }
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const pages = [...this.pages];
    const page = event.key === 'ArrowRight' ? pages.find(input => !input.checked) : pages.reverse().find(input => input.checked);
    if (page) { event.preventDefault(); page.click(); }
  }
}
