import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongKhanhTestComponent } from './long-khanh-test.component';

describe('LongKhanhTestComponent', () => {
  let component: LongKhanhTestComponent;
  let fixture: ComponentFixture<LongKhanhTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongKhanhTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongKhanhTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
