import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhTanLanCanvaComponent } from './dinh-tan-lan-canva.component';

describe('DinhTanLanCanvaComponent', () => {
  let component: DinhTanLanCanvaComponent;
  let fixture: ComponentFixture<DinhTanLanCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinhTanLanCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhTanLanCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
