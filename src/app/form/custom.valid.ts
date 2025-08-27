import {AbstractControl, ValidationErrors } from '@angular/forms';

export function password_valid(control: AbstractControl): ValidationErrors | null {
  const password = control.get('Password');
  const passwordConfirm = control.get('PasswordConfirm');
  if (password && passwordConfirm && password.value !== passwordConfirm.value && passwordConfirm.value !== '') {
    return { 'password_valid': true };
  }
  return null;
}

export function born_valid(control: AbstractControl): ValidationErrors | null {
  const today = new Date();
  const age = new Date(control.value);
  const age_year = today.getFullYear() - age.getFullYear();
  const age_month = today.getMonth() - age.getMonth();
  const age_day = today.getDate() - age.getDate();
  if (age_month < 0 || (age_month === 0 && age_day < 0)) {
    age_year - 1;
  }
  if (age_year < 14) {
    return { 'born_valid': true };
  }
  return null;
}
