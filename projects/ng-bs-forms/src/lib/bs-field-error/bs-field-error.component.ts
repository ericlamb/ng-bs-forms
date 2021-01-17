import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bs-field-error',
  templateUrl: './bs-field-error.component.html',
  styleUrls: ['./bs-field-error.component.scss']
})
export class BsFieldErrorComponent {
  @Input() error: string;

  constructor() { }

}
