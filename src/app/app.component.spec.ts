import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-menu', template: '' })
class MenuStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, MenuStubComponent],
    }).compileComponents();
  });

  it('keeps navigation and routed content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const host: HTMLElement = fixture.nativeElement;
    expect(host.querySelector('app-menu')).not.toBeNull();
    expect(host.querySelector('.content router-outlet')).not.toBeNull();
    expect(host.style.getPropertyValue('--menu-height')).toMatch(/^\d+px$/);
  });

  it('disconnects menu measurement on destruction', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const disconnect = spyOn(ResizeObserver.prototype, 'disconnect').and.callThrough();
    fixture.detectChanges();
    fixture.destroy();
    expect(disconnect).toHaveBeenCalledTimes(1);
  });

  it('removes its scroll listener on destruction', () => {
    const add = spyOn(window, 'addEventListener').and.callThrough();
    const remove = spyOn(window, 'removeEventListener').and.callThrough();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const registration = add.calls.allArgs().find(args => args[0] === 'scroll');
    expect(registration).toBeDefined();
    fixture.destroy();
    expect(remove).toHaveBeenCalledWith('scroll', registration![1]);
  });
});
