import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenThiTonComicComponent } from './nguyen-thi-ton-comic.component';

describe('NguyenThiTonComicComponent', () => {
  let component: NguyenThiTonComicComponent;
  let fixture: ComponentFixture<NguyenThiTonComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenThiTonComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenThiTonComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
