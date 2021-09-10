import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenTriPhuongCanvaComponent } from './nguyen-tri-phuong-canva.component';

describe('NguyenTriPhuongCanvaComponent', () => {
  let component: NguyenTriPhuongCanvaComponent;
  let fixture: ComponentFixture<NguyenTriPhuongCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenTriPhuongCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenTriPhuongCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
