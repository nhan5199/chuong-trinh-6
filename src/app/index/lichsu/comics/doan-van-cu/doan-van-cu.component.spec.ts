import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanVanCUComponent } from './doan-van-cu.component';

describe('DoanVanCUComponent', () => {
  let component: DoanVanCUComponent;
  let fixture: ComponentFixture<DoanVanCUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoanVanCUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoanVanCUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
