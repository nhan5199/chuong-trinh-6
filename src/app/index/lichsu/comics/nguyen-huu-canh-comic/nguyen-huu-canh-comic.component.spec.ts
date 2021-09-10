import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguyenHuuCanhComicComponent } from './nguyen-huu-canh-comic.component';

describe('NguyenHuuCanhComicComponent', () => {
  let component: NguyenHuuCanhComicComponent;
  let fixture: ComponentFixture<NguyenHuuCanhComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NguyenHuuCanhComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NguyenHuuCanhComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
