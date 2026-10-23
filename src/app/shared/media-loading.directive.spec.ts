import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MediaLoadingDirective } from './media-loading.directive';

@Component({ template: '<img [src]="src"><div class="media-player"><iframe></iframe></div><div class="exercise"><iframe></iframe></div><div class="book"><img data-media-src="assets/comics/TranThuongXuyen/1.png"></div>' })
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
    expect(img.alt).toBe('');
  });

  it('keeps transformed book pages eager and titles embedded lessons', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.book img').hasAttribute('loading')).toBeFalse();
    expect(fixture.nativeElement.querySelector('iframe').title).toBe('Nội dung học tập');
  });

  it('reserves a deferred page size without starting its image request', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    const image: HTMLImageElement = fixture.nativeElement.querySelector('.book img');
    expect(image.getAttribute('width')).toBe('2000');
    expect(image.getAttribute('height')).toBe('1600');
    expect(image.hasAttribute('src')).toBeFalse();
    image.dispatchEvent(new Event('media-request'));
    expect(image.loading).toBe('eager');
    expect(image.getAttribute('src')).toMatch(/^assets\//);
  });

  it('shows a video spinner while pending and hides it on load or failure', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    const player: HTMLElement = fixture.nativeElement.querySelector('.media-player');
    const frame = player.querySelector('iframe')!;
    const spinner = player.querySelector<HTMLElement>('[role="status"]')!;
    expect(spinner.hidden).toBeFalse();
    expect(spinner.textContent).toBe('Đang tải video');
    expect(player.classList.contains('media-frame')).toBeFalse();
    expect(fixture.nativeElement.querySelector('.exercise').classList.contains('media-frame')).toBeTrue();
    frame.dispatchEvent(new Event('load'));
    fixture.detectChanges();
    expect(spinner.hidden).toBeTrue();
    expect(frame.classList.contains('media-loading')).toBeFalse();
    frame.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(spinner.hidden).toBeTrue();
    expect(frame.classList.contains('media-error')).toBeTrue();
    player.querySelector<HTMLButtonElement>('.media-retry')!.click();
    fixture.detectChanges();
    expect(spinner.hidden).toBeFalse();
    expect(frame.getAttribute('aria-busy')).toBe('true');
    expect(player.querySelector('.media-retry')).toBeNull();
    fixture.destroy();
    expect(spinner.isConnected).toBeFalse();
  });

  it('offers one retry and removes its control when the view is destroyed', () => {
    const fixture = TestBed.createComponent(MediaHostComponent);
    fixture.detectChanges();
    const image: HTMLImageElement = fixture.nativeElement.querySelector('.book img');
    image.dispatchEvent(new Event('error'));
    image.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    const retry: HTMLButtonElement = fixture.nativeElement.querySelector('.book .media-retry');
    expect(fixture.nativeElement.querySelectorAll('.book .media-retry').length).toBe(1);
    expect(retry.type).toBe('button');
    fixture.destroy();
    expect(retry.isConnected).toBeFalse();
  });
});
