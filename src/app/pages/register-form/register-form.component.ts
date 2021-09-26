import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  type: string | null = 'user';
  rePassword: string = '';

  createUser!: FormGroup;

  constructor(private _Activatedroute:ActivatedRoute, private fb: FormBuilder) {
    this.type = this._Activatedroute.snapshot.paramMap.get("type");
  }

  ngOnInit(): void {
    this.createUser = this.fb.group({
      name: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      linkedin: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      repository: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      rePassword: new FormControl('',[Validators.required]),
    });
  }

  handleRegister(){
    console.log('user', this.createUser);
  }
}
