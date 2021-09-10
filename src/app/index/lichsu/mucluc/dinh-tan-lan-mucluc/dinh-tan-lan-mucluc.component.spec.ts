import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhTanLanMuclucComponent } from './dinh-tan-lan-mucluc.component';

describe('DinhTanLanMuclucComponent', () => {
  let component: DinhTanLanMuclucComponent;
  let fixture: ComponentFixture<DinhTanLanMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinhTanLanMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhTanLanMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
