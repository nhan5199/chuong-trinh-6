import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MediaLoadingDirective } from './media-loading.directive';

@Component({ template: '<img [src]="src"><iframe></iframe><div class="book"><img></div>' })
class MediaHostComponent { src = ''; }

describe('MediaLoadingDirective', () => {
  beforeEach(() => TestBed.configureTestingModule({ declarations: [MediaHostComponent, MediaLoadingDirective] }));

  it('marks pending media and clears it on load', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.loading).toBe('lazy');
    expect(img.decoding).toBe('async');
    expect(img.getAttribute('aria-busy')).toBe('true');
    img.dispatchEvent(new Event('load'));
    fixture.detectChanges();
    expect(img.classList.contains('media-loading')).toBeFalse();
    expect(img.hasAttribute('aria-busy')).toBeFalse();
  });

  it('exposes failures and clears them after a successful retry', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    img.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(img.classList.contains('media-error')).toBeTrue();
    expect(img.alt).toBe('Không tải được hình ảnh');
    fixture.componentInstance.src = 'assets/retry.png';
    fixture.detectChanges();
    expect(img.getAttribute('src')).toBe('assets/retry.png');
    img.dispatchEvent(new Event('load'));
    fixture.detectChanges();
    expect(img.classList.contains('media-error')).toBeFalse();
    expect(img.classList.contains('media-loading')).toBeFalse();
  });

  it('keeps transformed book pages eager and titles embedded lessons', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.book img').hasAttribute('loading')).toBeFalse();
    expect(fixture.nativeElement.querySelector('iframe').title).toBe('Nội dung học tập');
  });
});
