import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-bsf-field-error',
  templateUrl: './bs-field-error.component.html',
  styleUrls: ['./bs-field-error.component.scss']
})
export class BsFieldErrorComponent {
  @Input() error: string;

  constructor() { }

}
