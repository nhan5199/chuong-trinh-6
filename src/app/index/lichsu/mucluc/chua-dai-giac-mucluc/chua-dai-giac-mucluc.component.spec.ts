import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuaDaiGiacMuclucComponent } from './chua-dai-giac-mucluc.component';

describe('ChuaDaiGiacMuclucComponent', () => {
  let component: ChuaDaiGiacMuclucComponent;
  let fixture: ComponentFixture<ChuaDaiGiacMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuaDaiGiacMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuaDaiGiacMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
