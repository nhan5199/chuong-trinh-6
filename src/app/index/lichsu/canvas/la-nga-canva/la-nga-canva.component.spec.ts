import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaNgaCanvaComponent } from './la-nga-canva.component';

describe('LaNgaCanvaComponent', () => {
  let component: LaNgaCanvaComponent;
  let fixture: ComponentFixture<LaNgaCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaNgaCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaNgaCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
