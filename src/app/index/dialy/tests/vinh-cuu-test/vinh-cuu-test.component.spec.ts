import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinhCuuTestComponent } from './vinh-cuu-test.component';

describe('VinhCuuTestComponent', () => {
  let component: VinhCuuTestComponent;
  let fixture: ComponentFixture<VinhCuuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinhCuuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinhCuuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
