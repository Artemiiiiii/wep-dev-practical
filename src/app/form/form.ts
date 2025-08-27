import {Component, Input} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {password_valid, born_valid} from './custom.valid';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {
  signupForm = new FormGroup({
    Firstname: new FormControl('', {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)]}),
    Lastname: new FormControl('', {validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)]}),
    Email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    Password: new FormControl('', {validators: [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[0-9])(?=.*[a-zA-Z]).+')]}),
    PasswordConfirm: new FormControl('', {validators: Validators.required}),
    Born: new FormControl('', {validators: [Validators.required, born_valid]}),
  }, {validators: password_valid});
  register() {
    const {Password, PasswordConfirm, ...User} = this.signupForm.value
    console.log(JSON.stringify(User, null, 1));
  }
}
