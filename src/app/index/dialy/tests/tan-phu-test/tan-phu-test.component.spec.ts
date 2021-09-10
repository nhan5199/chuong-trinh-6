import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanPhuTestComponent } from './tan-phu-test.component';

describe('TanPhuTestComponent', () => {
  let component: TanPhuTestComponent;
  let fixture: ComponentFixture<TanPhuTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanPhuTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanPhuTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
