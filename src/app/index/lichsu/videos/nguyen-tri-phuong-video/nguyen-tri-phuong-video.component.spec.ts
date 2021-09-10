import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenTriPhuongVideoComponent } from './nguyen-tri-phuong-video.component';

describe('NguyenTriPhuongVideoComponent', () => {
  let component: NguyenTriPhuongVideoComponent;
  let fixture: ComponentFixture<NguyenTriPhuongVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenTriPhuongVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenTriPhuongVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
