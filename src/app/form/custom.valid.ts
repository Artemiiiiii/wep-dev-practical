import {AbstractControl, ValidationErrors } from '@angular/forms';

export function password_valid(control: AbstractControl): ValidationErrors | null {
  const password = control.get('Password');
  const passwordConfirm = control.get('PasswordConfirm');
  if (password && passwordConfirm && password.value !== passwordConfirm.value) {
    return { 'password_valid': false };
  }
  return null;
}
