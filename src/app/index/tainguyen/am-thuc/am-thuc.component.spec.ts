import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmThucComponent } from './am-thuc.component';

describe('AmThucComponent', () => {
  let component: AmThucComponent;
  let fixture: ComponentFixture<AmThucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmThucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmThucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
