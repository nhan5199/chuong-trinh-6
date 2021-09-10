import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaLyKinhTeComponent } from './dia-ly-kinh-te.component';

describe('DiaLyKinhTeComponent', () => {
  let component: DiaLyKinhTeComponent;
  let fixture: ComponentFixture<DiaLyKinhTeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaLyKinhTeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaLyKinhTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
