import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TainguyenComponent } from './tainguyen.component';

describe('TainguyenComponent', () => {
  let component: TainguyenComponent;
  let fixture: ComponentFixture<TainguyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TainguyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TainguyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
