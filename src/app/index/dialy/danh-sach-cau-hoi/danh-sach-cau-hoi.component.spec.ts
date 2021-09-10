import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachCauHoiComponent } from './danh-sach-cau-hoi.component';

describe('DanhSachCauHoiComponent', () => {
  let component: DanhSachCauHoiComponent;
  let fixture: ComponentFixture<DanhSachCauHoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachCauHoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachCauHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
