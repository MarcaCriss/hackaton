import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmedValidator } from './confirmed.validator';

enum FORMSTATUS{
  INVALID = 'INVALID',
  VALID = 'VALID'
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  type: string | null = 'user';
  rePassword: string = '';

  createUserForm!: FormGroup;

  constructor(
        private _Activatedroute:ActivatedRoute,
        private fb: FormBuilder,
        private registerService: RegisterService,
        private route: Router
      ) {
    this.type = this._Activatedroute.snapshot.paramMap.get("type");
  }

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      name: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      linkedin: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      repository: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      rePassword: new FormControl('',[Validators.required]),
    },{
      validator: ConfirmedValidator('password', 'rePassword')
    });
  }

  async handleRegister(){
    if(this.createUserForm.status === FORMSTATUS.INVALID){
      return;
    }

    const payload = { ...this.createUserForm.value, role: this.type == 'user' ? 'user' : 'company' };
    delete payload.rePassword;

    const response = await this.registerService.register(payload);
    if(response.success === true){
      this.route.navigate(['/login']);
    }
  }
}
