import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaBaChongVideoComponent } from './da-ba-chong-video.component';

describe('DaBaChongVideoComponent', () => {
  let component: DaBaChongVideoComponent;
  let fixture: ComponentFixture<DaBaChongVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaBaChongVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaBaChongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
