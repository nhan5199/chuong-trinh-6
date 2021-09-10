import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XuanLocTestComponent } from './xuan-loc-test.component';

describe('XuanLocTestComponent', () => {
  let component: XuanLocTestComponent;
  let fixture: ComponentFixture<XuanLocTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XuanLocTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XuanLocTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
