import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenHuuCanhCanvaComponent } from './nguyen-huu-canh-canva.component';

describe('NguyenHuuCanhCanvaComponent', () => {
  let component: NguyenHuuCanhCanvaComponent;
  let fixture: ComponentFixture<NguyenHuuCanhCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenHuuCanhCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenHuuCanhCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
