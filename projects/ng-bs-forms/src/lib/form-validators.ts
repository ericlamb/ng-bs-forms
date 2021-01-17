import { FormGroup, ValidatorFn } from '@angular/forms';

export function equalValueValidator(validatedKey: string, matchedKey: string): ValidatorFn {
  const errorKey = 'mismatch';
  return (group: FormGroup): { [key: string]: any } => {
    const validated = group.controls[validatedKey];
    const matched = group.controls[matchedKey];
    const isMatch = validated.value === matched.value;
    if (!isMatch && validated.valid && matched.valid) {
      validated.setErrors({ mismatch: validatedKey });
      const message = validatedKey + ' != ' + matchedKey;
      return { mismatch: message };
    }
    if (isMatch && validated.hasError(errorKey)) {
      validated.setErrors(null);
    }
    return null;
  };
}
