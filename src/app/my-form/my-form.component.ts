import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
selector: 'app-my-form',
templateUrl: './my-form.component.html',
styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
form: FormGroup;
constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
  phoneNo: ['', [Validators.required, Validators.minLength(10)]],
  email: ['', Validators.email],
  password: ['', [Validators.required, Validators.minLength(8)]],
  confirmPassword: ['', Validators.required]
  });
}
 
ngOnInit() {}
}
