import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachBanDoComponent } from './sach-ban-do.component';

describe('SachBanDoComponent', () => {
  let component: SachBanDoComponent;
  let fixture: ComponentFixture<SachBanDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SachBanDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SachBanDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
