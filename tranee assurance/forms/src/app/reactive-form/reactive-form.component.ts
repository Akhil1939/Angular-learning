import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  get Email(){
    return this.loginForm.get('email');
  }
  get Password(){
    return this.loginForm.get('password');
  }
  loginUser() {
    console.log(this.loginForm.value);
  }
}
