import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiKiNiemMuclucComponent } from './dai-ki-niem-mucluc.component';

describe('DaiKiNiemMuclucComponent', () => {
  let component: DaiKiNiemMuclucComponent;
  let fixture: ComponentFixture<DaiKiNiemMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiKiNiemMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiKiNiemMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
