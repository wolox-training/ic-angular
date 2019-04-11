import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from '@commons/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  localeOptions = { en: 'en' };
 s
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      locale: [this.localeOptions.en, Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    }, {
      validator: PasswordValidator.MatchPassword
    });
  }

  onSubmit(formData) {
    if (!this.registerForm.valid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.registerForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError);
          });
        }
      });
      return false;
    }
    console.log({
      User: {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        locale: formData.locale,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation
      }
    });
  }
}
