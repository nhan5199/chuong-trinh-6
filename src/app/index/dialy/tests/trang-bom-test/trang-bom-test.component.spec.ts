import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangBomTestComponent } from './trang-bom-test.component';

describe('TrangBomTestComponent', () => {
  let component: TrangBomTestComponent;
  let fixture: ComponentFixture<TrangBomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrangBomTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangBomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
