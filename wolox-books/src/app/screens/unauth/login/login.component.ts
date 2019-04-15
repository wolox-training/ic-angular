import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { LoginModel } from '@models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  unauthCardButtonTxt = 'Sign Up';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });
  }

  onSubmit(formData) {
    if (!this.loginForm.valid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        const controlErrors: ValidationErrors = this.loginForm.get(key).errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError);
          });
        }
      });
      return false;
    }
    const data: LoginModel = {
      session: {
        email: formData.email,
        password: formData.password
      }
    };
    this.userService.login(data).subscribe((response) => {
      if (response.status === 200) {
        console.log('access_token => ', response.body.access_token);
      }
    }, (err) => {
      console.log(`Error code: ${err.status}`);
      console.log(`Error Body: ${JSON.stringify(err.error)}`);
    });
  }

  goToRegister() {
    this.router.navigateByUrl('/sign-up');
  }
}
