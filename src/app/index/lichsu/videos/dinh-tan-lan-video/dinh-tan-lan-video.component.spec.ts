import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhTanLanVideoComponent } from './dinh-tan-lan-video.component';

describe('DinhTanLanVideoComponent', () => {
  let component: DinhTanLanVideoComponent;
  let fixture: ComponentFixture<DinhTanLanVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinhTanLanVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhTanLanVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
