import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsuhanhchinhVideoComponent } from './lichsuhanhchinh-video.component';

describe('LichsuhanhchinhVideoComponent', () => {
  let component: LichsuhanhchinhVideoComponent;
  let fixture: ComponentFixture<LichsuhanhchinhVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichsuhanhchinhVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsuhanhchinhVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
