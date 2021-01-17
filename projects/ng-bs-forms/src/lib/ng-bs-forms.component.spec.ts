import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBsFormsComponent } from './ng-bs-forms.component';

describe('NgBsFormsComponent', () => {
  let component: NgBsFormsComponent;
  let fixture: ComponentFixture<NgBsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
