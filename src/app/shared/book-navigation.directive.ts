import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnDestroy } from '@angular/core';

@Directive({ selector: '.book' })
export class BookNavigationDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.tabindex') tabindex = 0;
  @HostBinding('attr.aria-label') label = 'Sách lật trang. Dùng phím mũi tên trái và phải để chuyển trang.';
  constructor(private readonly element: ElementRef<HTMLElement>) {}
  private image?: HTMLImageElement;
  private readonly sizeBook = () => {
    if (this.image?.naturalWidth && this.image.naturalHeight) {
      this.element.nativeElement.style.setProperty('--spread-ratio', String(2 * this.image.naturalWidth / this.image.naturalHeight));
    }
  };

  ngAfterViewInit(): void {
    this.image = this.element.nativeElement.querySelector<HTMLImageElement>('img') ?? undefined;
    this.image?.addEventListener('load', this.sizeBook);
    this.sizeBook();
  }

  ngOnDestroy(): void { this.image?.removeEventListener('load', this.sizeBook); }

  @HostListener('click', ['$event'])
  turnPage(event: MouseEvent): void {
    const label = (event.target as HTMLElement).closest<HTMLLabelElement>('label.next-btn, label.back-btn');
    if (!label || !this.element.nativeElement.contains(label)) return;
    const input = label.control;
    if (input instanceof HTMLInputElement) {
      event.preventDefault();
      input.click();
    }
  }

  @HostListener('keydown', ['$event'])
  navigate(event: KeyboardEvent): void {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const pages = Array.from(this.element.nativeElement.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
    const page = event.key === 'ArrowRight' ? pages.find(input => !input.checked) : pages.reverse().find(input => input.checked);
    if (page) { event.preventDefault(); page.click(); }
  }
}
