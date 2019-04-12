import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { PasswordValidator } from '@validators/password.validator';
import { User } from '@models/user.model';
import { UserService } from '@services/user.service';
import Utils from '@commons/utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  localeOptions = { en: 'en' };
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

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

  onSubmit() {
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
    const data = new User(this.registerForm.value);
    Utils.callService(this.userService.createUser(data), (response) => {
      console.log('response => ', response);
    });
  }
}
