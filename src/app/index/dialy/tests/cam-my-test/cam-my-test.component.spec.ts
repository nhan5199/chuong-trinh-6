import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamMyTestComponent } from './cam-my-test.component';

describe('CamMyTestComponent', () => {
  let component: CamMyTestComponent;
  let fixture: ComponentFixture<CamMyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamMyTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamMyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
