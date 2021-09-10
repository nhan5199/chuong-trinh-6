import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinhHoaiDucComicComponent } from './trinh-hoai-duc-comic.component';

describe('TrinhHoaiDucComicComponent', () => {
  let component: TrinhHoaiDucComicComponent;
  let fixture: ComponentFixture<TrinhHoaiDucComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrinhHoaiDucComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinhHoaiDucComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
