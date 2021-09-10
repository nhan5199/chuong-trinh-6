import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroChoiComponent } from './tro-choi.component';

describe('TroChoiComponent', () => {
  let component: TroChoiComponent;
  let fixture: ComponentFixture<TroChoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroChoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroChoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
