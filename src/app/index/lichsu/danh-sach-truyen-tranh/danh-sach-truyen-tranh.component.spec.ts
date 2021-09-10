import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachTruyenTranhComponent } from './danh-sach-truyen-tranh.component';

describe('DanhSachTruyenTranhComponent', () => {
  let component: DanhSachTruyenTranhComponent;
  let fixture: ComponentFixture<DanhSachTruyenTranhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachTruyenTranhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachTruyenTranhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
