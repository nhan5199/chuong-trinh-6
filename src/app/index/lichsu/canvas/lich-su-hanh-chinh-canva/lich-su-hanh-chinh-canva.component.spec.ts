import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichSuHanhChinhCanvaComponent } from './lich-su-hanh-chinh-canva.component';

describe('LichSuHanhChinhCanvaComponent', () => {
  let component: LichSuHanhChinhCanvaComponent;
  let fixture: ComponentFixture<LichSuHanhChinhCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LichSuHanhChinhCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LichSuHanhChinhCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
