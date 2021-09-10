import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenHuuCanhVideoComponent } from './nguyen-huu-canh-video.component';

describe('NguyenHuuCanhVideoComponent', () => {
  let component: NguyenHuuCanhVideoComponent;
  let fixture: ComponentFixture<NguyenHuuCanhVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenHuuCanhVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenHuuCanhVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
