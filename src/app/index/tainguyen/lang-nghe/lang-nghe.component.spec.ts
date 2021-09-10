import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangNgheComponent } from './lang-nghe.component';

describe('LangNgheComponent', () => {
  let component: LangNgheComponent;
  let fixture: ComponentFixture<LangNgheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangNgheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangNgheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
