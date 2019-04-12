import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from '@validators/password.validator';
import { UserModelSave } from '@models/user.model';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  localeOptions = { en: 'en' };
  registerForm: FormGroup;
  unauthCardButtonTxt = 'Login';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      locale: [this.localeOptions.en, Validators.required],
      password: [null, Validators.required],
      passwordConfirmation: [null, Validators.required]
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
    const data: UserModelSave = {
      user: {
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        locale: formData.locale,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
      }
    };
    this.userService.createUser(data).subscribe((response) => {
      if (response.status === 201) {
        console.log('Success');
        this.goToLogin();
      }
    }, (err) => {
      console.log(`Error code: ${err.status}`);
      console.log(`Error Body: ${JSON.stringify(err.error)}`);
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
