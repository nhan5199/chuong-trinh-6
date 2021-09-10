import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHoaiDucMuclucComponent } from './trinh-hoai-duc-mucluc.component';

describe('TrinhHoaiDucMuclucComponent', () => {
  let component: TrinhHoaiDucMuclucComponent;
  let fixture: ComponentFixture<TrinhHoaiDucMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinhHoaiDucMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinhHoaiDucMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
