import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuaDaiGiacVideoComponent } from './chua-dai-giac-video.component';

describe('ChuaDaiGiacVideoComponent', () => {
  let component: ChuaDaiGiacVideoComponent;
  let fixture: ComponentFixture<ChuaDaiGiacVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuaDaiGiacVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuaDaiGiacVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
