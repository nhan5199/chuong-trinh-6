import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeHoiComponent } from './le-hoi.component';

describe('LeHoiComponent', () => {
  let component: LeHoiComponent;
  let fixture: ComponentFixture<LeHoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeHoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeHoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
