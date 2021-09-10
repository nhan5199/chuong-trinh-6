import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaBaChongCanvaComponent } from './da-ba-chong-canva.component';

describe('DaBaChongCanvaComponent', () => {
  let component: DaBaChongCanvaComponent;
  let fixture: ComponentFixture<DaBaChongCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaBaChongCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaBaChongCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
