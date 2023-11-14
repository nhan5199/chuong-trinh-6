import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuChungVideoComponent } from './gioi-thieu-chung-video.component';

describe('GioiThieuChungVideoComponent', () => {
  let component: GioiThieuChungVideoComponent;
  let fixture: ComponentFixture<GioiThieuChungVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuChungVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuChungVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
