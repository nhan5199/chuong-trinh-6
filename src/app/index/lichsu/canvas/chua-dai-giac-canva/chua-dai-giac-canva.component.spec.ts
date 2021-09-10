import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuaDaiGiacCanvaComponent } from './chua-dai-giac-canva.component';

describe('ChuaDaiGiacCanvaComponent', () => {
  let component: ChuaDaiGiacCanvaComponent;
  let fixture: ComponentFixture<ChuaDaiGiacCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuaDaiGiacCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuaDaiGiacCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
