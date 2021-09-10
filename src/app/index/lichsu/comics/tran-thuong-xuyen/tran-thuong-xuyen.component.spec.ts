import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranThuongXuyenComponent } from './tran-thuong-xuyen.component';

describe('TranThuongXuyenComponent', () => {
  let component: TranThuongXuyenComponent;
  let fixture: ComponentFixture<TranThuongXuyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranThuongXuyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranThuongXuyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
