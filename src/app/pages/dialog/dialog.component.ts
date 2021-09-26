import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Bootcamp } from '../../core/models/bootcamp';
import { BootcampService } from '../../core/services/bootcamp.service';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  createBootcampForm!: FormGroup;

  constructor(private fb: FormBuilder, private bootcampService: BootcampService) {}

  ngOnInit() {
    this.createBootcampForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
    })
  }

  createBootcamp() {
    this.bootcampService.createBootcamps(this.createBootcampForm.value);
  }
}
