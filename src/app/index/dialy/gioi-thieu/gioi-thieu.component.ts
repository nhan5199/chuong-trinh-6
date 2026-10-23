import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.css'],
})
export class GioiThieuComponent implements AfterViewInit, OnDestroy {
  currentSlide = 1;
  private slides: HTMLElement[] = [];
  private timer?: ReturnType<typeof setInterval>;

  constructor(private readonly location: Location, private readonly element: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.slides = Array.from(this.element.nativeElement.querySelectorAll<HTMLElement>('.slide-item'));
    if (this.slides.length > 1) this.timer = setInterval(() => this.goToNextSlide(), 5000);
  }

  ngOnDestroy(): void { clearInterval(this.timer); }
  cancel(): void { this.location.back(); }
  goToNextSlide(): void { this.move(1); }
  goToPrevSlide(): void { this.move(-1); }

  private move(direction: number): void {
    if (!this.slides.length) return;
    this.slides[this.currentSlide - 1].classList.remove('active');
    this.currentSlide = (this.currentSlide - 1 + direction + this.slides.length) % this.slides.length + 1;
    this.slides[this.currentSlide - 1].classList.add('active');
  }
}
