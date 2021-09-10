import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinhQuanTestComponent } from './dinh-quan-test.component';

describe('DinhQuanTestComponent', () => {
  let component: DinhQuanTestComponent;
  let fixture: ComponentFixture<DinhQuanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinhQuanTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinhQuanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
