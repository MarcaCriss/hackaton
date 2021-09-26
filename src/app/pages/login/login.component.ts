import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthSession } from 'src/app/core/services/oauth/auth-session';
import { LoginWithCredentials } from 'src/app/core/services/oauth/login-with-credential';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private authService: LoginWithCredentials, private authSession:AuthSession) {
    this.loginForm = this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    return new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl('', [Validators.required, Validators.required]),
    });
  }

  submitForm() {
    let { username, password } = this.loginForm.value;
    this.authService.handle(username,password);
    console.log('logueado')
  }
  getData(){
    console.log(this.authSession.getAuthUser());
  }
}
