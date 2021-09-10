import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHoaiDucCanvaComponent } from './trinh-hoai-duc-canva.component';

describe('TrinhHoaiDucCanvaComponent', () => {
  let component: TrinhHoaiDucCanvaComponent;
  let fixture: ComponentFixture<TrinhHoaiDucCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinhHoaiDucCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinhHoaiDucCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
