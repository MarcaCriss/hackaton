import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;


  constructor() {
    this.loginForm=this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    return new FormGroup({
      username: new FormControl('',[Validators.required,Validators.minLength(5)]),
      password:new FormControl('',[Validators.required,Validators.required])
    })
  }

  submitForm(){
    console.log(this.loginForm.value)
  }

}
