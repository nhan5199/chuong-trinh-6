import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongNhatTestComponent } from './thong-nhat-test.component';

describe('ThongNhatTestComponent', () => {
  let component: ThongNhatTestComponent;
  let fixture: ComponentFixture<ThongNhatTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongNhatTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongNhatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
