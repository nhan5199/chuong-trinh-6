import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachDienTuComponent } from './sach-dien-tu.component';

describe('SachDienTuComponent', () => {
  let component: SachDienTuComponent;
  let fixture: ComponentFixture<SachDienTuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachDienTuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachDienTuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
