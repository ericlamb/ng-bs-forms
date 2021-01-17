import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsFieldErrorComponent } from './bs-field-error.component';

describe('BsFieldErrorComponent', () => {
  let component: BsFieldErrorComponent;
  let fixture: ComponentFixture<BsFieldErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BsFieldErrorComponent ]
    });

    fixture = TestBed.createComponent(BsFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
