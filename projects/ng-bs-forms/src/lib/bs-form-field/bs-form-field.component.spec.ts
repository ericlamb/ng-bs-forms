import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsFormFieldComponent } from './bs-form-field.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

describe('BsFormFieldComponent', () => {
  @Component({
    selector: `app-host-component`,
    template: `<form [formGroup]="testForm">
    <app-bs-form-field [formField]="testFormControl"></app-bs-form-field>
    </form>`
  })
  class TestHostComponent {
    testForm: FormGroup;
    testFormControl: FormControl;
    @ViewChild(BsFormFieldComponent)
    public componentUnderTestComponent: BsFormFieldComponent;
    constructor(
      private formBuilder: FormBuilder
    ) {
      this.testFormControl = new FormControl('', {});
      this.testForm = this.formBuilder.group({
        testFormControl: this.testFormControl
      });
    }
  }
  class TestComponent {
    constructor(private componentFixture: ComponentFixture<TestHostComponent>) {
    }

    get input(): any {
      return this.componentFixture.nativeElement.querySelector(`input`);
    }

    get label(): any {
      return this.componentFixture.nativeElement.querySelector('label');
    }

    get icon(): any {
      return this.componentFixture.nativeElement.querySelector(`div[class="input-group-prepend"]`);
    }

    get validationMessage(): any {
      return this.input.parentElement.querySelector('.invalid-feedback');
    }

    get isValid(): any {
      return !this.input.classList.contains('is-invalid');
    }
  }

  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testComponent: TestComponent;

  const library = new FaIconLibrary();
  library.addIconPacks(fas);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BsFormFieldComponent,
        TestHostComponent],
      imports: [
        FontAwesomeModule,
        ReactiveFormsModule],
      providers: [
        { provide: FaIconLibrary, useValue: library },
      ]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testComponent = new TestComponent(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when creating a form field without a placeholder', () => {
    it('should not have a placeholder', () =>
      expect(testComponent.input.placeholder).toEqual(''));
  });

  describe('when creating a form field with a placeholder', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.placeholder = 'testPlaceholder';
      fixture.detectChanges();
    });

    it('should have a placeholder', () =>
      expect(testComponent.input.placeholder).toEqual('testPlaceholder'));
  });

  describe('when creating a form field without an icon', () => {
    it('should not have an icon', () =>
      expect(testComponent.icon).toBeNull());
  });

  describe('when creating a form field with an icon', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.icon = 'envelope';
      fixture.detectChanges();
    });

    it('should have an icon', () =>
      expect(testComponent.icon).not.toBeNull());
  });

  describe('when creating a field without a type', () => {
    it('should default to a type of text', () =>
      expect(testComponent.input.type).toEqual('text'));
  });

  describe('when creating a field with a type', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.type = 'password';
      fixture.detectChanges();
    });

    it('should use the specified type', () =>
      expect(testComponent.input.type).toEqual('password'));
  });

  describe('when creating a form field without autofocus', () => {
    it('should not have autofocus set', () =>
      expect(testComponent.input.autofocus).toEqual(false));
  });

  describe('when creating a form field with autofocus', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.autoFocus = true;
      fixture.detectChanges();
    });

    it('should have a autofocus set', () =>
      expect(testComponent.input.autofocus).toEqual(true));
  });

  describe('when creating a form field without a label', () => {
    it('should not have a label', () =>
      expect(testComponent.label).toBeNull());
  });

  describe('when creating a form field with a label', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.label = 'testLabel';
      fixture.detectChanges();
    });

    it('should have a label set', () =>
      expect(testComponent.label.textContent).toEqual('testLabel'));

    it('should assign the label a for attribute', () =>
      expect(testComponent.label.htmlFor).not.toEqual(''));

    it('should give the label the same id as the field', () =>
      expect(testComponent.label.htmlFor).toEqual(testComponent.input.id));
  });

  describe('when a form field is invalid.', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.formField.setValidators(Validators.required);
      component.componentUnderTestComponent.formField.updateValueAndValidity();
      fixture.detectChanges();
    });

    describe('when a form field is untouched', () => {
      it('should be valid', () =>
        expect(testComponent.isValid).toBeTruthy());

      it('should not have a validation message', () =>
        expect(testComponent.validationMessage).toBeNull());
    });

    describe('when a form field is touched', () => {
      beforeEach(() => {
        component.componentUnderTestComponent.formField.markAsTouched();
        fixture.detectChanges();
      });

      it('should be invalid', () =>
        expect(testComponent.isValid).toBeFalsy());

      it('should have a validation message', () =>
        expect(testComponent.validationMessage).not.toBeNull());
    });


    describe('when a form field is dirty', () => {
      beforeEach(() => {
        component.componentUnderTestComponent.formField.markAsDirty();
        fixture.detectChanges();
      });

      it('should be invalid', () =>
        expect(testComponent.isValid).toBeFalsy());

      it('should have a validation message', () =>
        expect(testComponent.validationMessage).not.toBeNull());
    });
  });

  describe('when a form field is valid.', () => {
    beforeEach(() => {
      component.componentUnderTestComponent.formField.setValidators(Validators.required);
      component.componentUnderTestComponent.formField.setValue('testValue');
      component.componentUnderTestComponent.formField.markAsTouched();
      component.componentUnderTestComponent.formField.updateValueAndValidity();
      component.componentUnderTestComponent.formField.markAsDirty();
      fixture.detectChanges();
    });

    it('should be valid', () =>
      expect(testComponent.isValid).toBeTruthy());

    it('should not have a validation message', () =>
      expect(testComponent.validationMessage).toBeNull());
  });
});
