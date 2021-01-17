import { Component, OnInit, Input } from '@angular/core';
import { FormControl, } from '@angular/forms';

@Component({
  selector: 'ng-bsf-form-field',
  templateUrl: './bs-form-field.component.html',
  styleUrls: ['./bs-form-field.component.scss'],
})
export class BsFormFieldComponent implements OnInit {
  @Input() formField: FormControl;
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() name: string;
  @Input() type: string;
  @Input() autoFocus: boolean;
  @Input() label: string;
  id: string;

  constructor() { }

  ngOnInit(): void {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
  }

  invalid(): boolean {
    return this.formField != null && this.formField.invalid &&
      (this.formField.dirty || this.formField.touched);
  }
}
