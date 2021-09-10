import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHoaiDucVideoComponent } from './trinh-hoai-duc-video.component';

describe('TrinhHoaiDucVideoComponent', () => {
  let component: TrinhHoaiDucVideoComponent;
  let fixture: ComponentFixture<TrinhHoaiDucVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinhHoaiDucVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinhHoaiDucVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
