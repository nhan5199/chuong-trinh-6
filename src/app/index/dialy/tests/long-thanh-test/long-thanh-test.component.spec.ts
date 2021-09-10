import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongThanhTestComponent } from './long-thanh-test.component';

describe('LongThanhTestComponent', () => {
  let component: LongThanhTestComponent;
  let fixture: ComponentFixture<LongThanhTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongThanhTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongThanhTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
