import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaiKiNiemVideoComponent } from './dai-ki-niem-video.component';

describe('DaiKiNiemVideoComponent', () => {
  let component: DaiKiNiemVideoComponent;
  let fixture: ComponentFixture<DaiKiNiemVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaiKiNiemVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaiKiNiemVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
