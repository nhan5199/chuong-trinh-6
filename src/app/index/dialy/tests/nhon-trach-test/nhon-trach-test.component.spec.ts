import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhonTrachTestComponent } from './nhon-trach-test.component';

describe('NhonTrachTestComponent', () => {
  let component: NhonTrachTestComponent;
  let fixture: ComponentFixture<NhonTrachTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhonTrachTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhonTrachTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
