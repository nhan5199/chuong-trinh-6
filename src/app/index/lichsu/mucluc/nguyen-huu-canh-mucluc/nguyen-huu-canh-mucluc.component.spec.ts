import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenHuuCanhMuclucComponent } from './nguyen-huu-canh-mucluc.component';

describe('NguyenHuuCanhMuclucComponent', () => {
  let component: NguyenHuuCanhMuclucComponent;
  let fixture: ComponentFixture<NguyenHuuCanhMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenHuuCanhMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenHuuCanhMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
