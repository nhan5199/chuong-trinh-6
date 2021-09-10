import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialyComponent } from './dialy.component';

describe('DialyComponent', () => {
  let component: DialyComponent;
  let fixture: ComponentFixture<DialyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
