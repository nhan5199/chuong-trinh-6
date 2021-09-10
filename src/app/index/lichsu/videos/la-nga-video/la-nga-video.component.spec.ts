import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaNgaVideoComponent } from './la-nga-video.component';

describe('LaNgaVideoComponent', () => {
  let component: LaNgaVideoComponent;
  let fixture: ComponentFixture<LaNgaVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaNgaVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaNgaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
