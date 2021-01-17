import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BsFieldErrorComponent } from './bs-field-error/bs-field-error.component';
import { BsFormFieldComponent } from './bs-form-field/bs-form-field.component';



@NgModule({
  declarations: [
    BsFieldErrorComponent,
    BsFormFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    BsFieldErrorComponent,
    BsFormFieldComponent,
  ]
})
export class NgBsFormsModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
