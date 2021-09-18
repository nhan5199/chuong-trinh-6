import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachLichSuComponent } from './sach-lich-su.component';

describe('SachLichSuComponent', () => {
  let component: SachLichSuComponent;
  let fixture: ComponentFixture<SachLichSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachLichSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachLichSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
