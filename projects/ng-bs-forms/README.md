![CI](https://github.com/ericlamb/ng-bs-forms/workflows/CI/badge.svg)
![npm (scoped)](https://img.shields.io/npm/v/@ericlamb/ng-bs-forms)

# Angular BootStrap Forms

Provides components for using Angular Reactive Forms with BootStrap 4.5.

```html
<form [formGroup]="loginForm" (ngSubmit)="submitForm()">
  <div class="container">
    <app-bs-form-field [formField]="userName" [icon]="'user'" [placeholder]="'username (or email)'"
      name="username" [autoFocus]="true">
      <app-bs-field-error *ngIf="userName.hasError('required')" [error]="'Username is required.'">
      </app-bs-field-error>
    </app-bs-form-field>
    <app-bs-form-field [formField]="password" [type]="'password'" [icon]="'key'" [placeholder]="'password'"
      name="password">
      <app-bs-field-error *ngIf="password.hasError('required')" [error]="'Password is required.'">
      </app-bs-field-error>
    </app-bs-form-field>
  </div>
  <div class="form-group text-right">
    <button class="btn btn-primary" (mousedown)="validateForm()">
      <fa-icon [icon]="['fas', 'sign-in-alt']"></fa-icon> Sign In
    </button>
  </div>
</form>
```

## Text Inputs (`app-bs-form-field`)

```html
<app-bs-form-field [formField]="userName" [icon]="'user'" [placeholder]="'username (or email)'" label="Username (or Email)" name="username" [autoFocus]="true">
</app-bs-form-field>
```

|Input|Description|
|:---|:---|
|`formField`|Form field to bind the contents of the input to.|
|`placeholder`|Placeholder text to display for an empty input|
|`icon`|[Font Awesome](https://fontawesome.com/) icon from the [free solid](https://fontawesome.com/icons?d=gallery&s=solid&m=free) icon collection to perpend to the form field.|
|`name`|Name to apply to the input.|
|`type`|HTML input type to set the input field to.|
|`autoFocus`|Input to focus when the control loads. Use once per form.|
|label|Label to apply to the form field.|

## Displaying Validation Errors (`app-bs-field-error`)
To display validation errors add a `app-bs-field-error` under the `app-bs-form-field`. Use an `ngIf` to control when the error is shown. Set the text to display in the `error` input.

### Example
```html
<app-bs-field-error *ngIf="password.hasError('required')" [error]="'Password is required.'">
</app-bs-field-error>
```

### Inputs
|Input|Description|
|:---|:---|
|`error`|The error to display.|
