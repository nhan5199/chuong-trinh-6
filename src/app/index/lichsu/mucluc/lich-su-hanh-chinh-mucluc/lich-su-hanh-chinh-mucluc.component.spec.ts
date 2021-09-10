import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuHanhChinhMuclucComponent } from './lich-su-hanh-chinh-mucluc.component';

describe('LichSuHanhChinhMuclucComponent', () => {
  let component: LichSuHanhChinhMuclucComponent;
  let fixture: ComponentFixture<LichSuHanhChinhMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuHanhChinhMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuHanhChinhMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
