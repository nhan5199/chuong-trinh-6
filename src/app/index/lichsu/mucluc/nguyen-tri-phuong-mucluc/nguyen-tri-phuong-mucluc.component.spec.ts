import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenTriPhuongMuclucComponent } from './nguyen-tri-phuong-mucluc.component';

describe('NguyenTriPhuongMuclucComponent', () => {
  let component: NguyenTriPhuongMuclucComponent;
  let fixture: ComponentFixture<NguyenTriPhuongMuclucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenTriPhuongMuclucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenTriPhuongMuclucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
