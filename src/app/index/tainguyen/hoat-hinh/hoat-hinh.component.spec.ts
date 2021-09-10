import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatHinhComponent } from './hoat-hinh.component';

describe('HoatHinhComponent', () => {
  let component: HoatHinhComponent;
  let fixture: ComponentFixture<HoatHinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoatHinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatHinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
