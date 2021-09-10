import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienHoaTestComponent } from './bien-hoa-test.component';

describe('BienHoaTestComponent', () => {
  let component: BienHoaTestComponent;
  let fixture: ComponentFixture<BienHoaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienHoaTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienHoaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
