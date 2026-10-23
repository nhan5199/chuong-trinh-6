import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'project';
  private menuObserver?: ResizeObserver;
  showScrollTop = false;
  private readonly onScroll = () => {
    const visible = window.scrollY > 180;
    if (visible !== this.showScrollTop) this.zone.run(() => this.showScrollTop = visible);
  };

  constructor(private readonly element: ElementRef<HTMLElement>, private readonly zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => window.addEventListener('scroll', this.onScroll, { passive: true }));
    const menu = this.element.nativeElement.querySelector('app-menu');
    if (menu instanceof HTMLElement) {
      const updateHeight = () => this.element.nativeElement.style.setProperty('--menu-height', `${menu.offsetHeight}px`);
      updateHeight();
      this.zone.runOutsideAngular(() => {
        this.menuObserver = new ResizeObserver(updateHeight);
        this.menuObserver.observe(menu);
      });
    }
  }

  ngOnDestroy(): void {
    this.menuObserver?.disconnect();
    window.removeEventListener('scroll', this.onScroll);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
}
