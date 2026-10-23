import { Location } from '@angular/common';
import { ElementRef } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { GioiThieuComponent } from './gioi-thieu.component';

describe('GioiThieuComponent slideshow', () => {
  it('wraps both directions, advances automatically and stops after destruction', fakeAsync(() => {
    const host = document.createElement('div');
    host.innerHTML = '<div class="slide-item active"></div><div class="slide-item"></div><div class="slide-item"></div>';
    const component = new GioiThieuComponent({ back: () => {} } as Location, new ElementRef(host));
    component.ngAfterViewInit();
    component.goToPrevSlide();
    expect(component.currentSlide).toBe(3);
    expect(host.children[2].classList.contains('active')).toBeTrue();
    component.goToNextSlide();
    expect(component.currentSlide).toBe(1);
    tick(5000);
    expect(component.currentSlide).toBe(2);
    expect(host.querySelectorAll('.active').length).toBe(1);
    component.ngOnDestroy();
    tick(10000);
    expect(component.currentSlide).toBe(2);
  }));
});
