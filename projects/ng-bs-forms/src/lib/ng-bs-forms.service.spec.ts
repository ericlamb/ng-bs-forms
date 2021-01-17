import { TestBed } from '@angular/core/testing';

import { NgBsFormsService } from './ng-bs-forms.service';

describe('NgBsFormsService', () => {
  let service: NgBsFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBsFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
