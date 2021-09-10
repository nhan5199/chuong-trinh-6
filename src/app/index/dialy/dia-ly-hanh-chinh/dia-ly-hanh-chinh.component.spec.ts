import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaLyHanhChinhComponent } from './dia-ly-hanh-chinh.component';

describe('DiaLyHanhChinhComponent', () => {
  let component: DiaLyHanhChinhComponent;
  let fixture: ComponentFixture<DiaLyHanhChinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaLyHanhChinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaLyHanhChinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
