import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaNgaMuclucComponent } from './la-nga-mucluc.component';

describe('LaNgaMuclucComponent', () => {
  let component: LaNgaMuclucComponent;
  let fixture: ComponentFixture<LaNgaMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaNgaMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaNgaMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
