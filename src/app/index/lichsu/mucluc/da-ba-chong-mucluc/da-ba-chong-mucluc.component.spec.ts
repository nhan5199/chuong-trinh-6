import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaBaChongMuclucComponent } from './da-ba-chong-mucluc.component';

describe('DaBaChongMuclucComponent', () => {
  let component: DaBaChongMuclucComponent;
  let fixture: ComponentFixture<DaBaChongMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaBaChongMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaBaChongMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
