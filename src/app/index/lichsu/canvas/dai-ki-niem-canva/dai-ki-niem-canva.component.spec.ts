import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiKiNiemCanvaComponent } from './dai-ki-niem-canva.component';

describe('DaiKiNiemCanvaComponent', () => {
  let component: DaiKiNiemCanvaComponent;
  let fixture: ComponentFixture<DaiKiNiemCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiKiNiemCanvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiKiNiemCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
