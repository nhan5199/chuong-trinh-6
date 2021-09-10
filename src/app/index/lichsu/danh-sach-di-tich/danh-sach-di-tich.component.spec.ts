import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachDiTichComponent } from './danh-sach-di-tich.component';

describe('DanhSachDiTichComponent', () => {
  let component: DanhSachDiTichComponent;
  let fixture: ComponentFixture<DanhSachDiTichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhSachDiTichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachDiTichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
