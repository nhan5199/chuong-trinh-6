import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanHoaComponent } from './van-hoa.component';

describe('VanHoaComponent', () => {
  let component: VanHoaComponent;
  let fixture: ComponentFixture<VanHoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanHoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanHoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
