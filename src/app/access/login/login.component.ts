import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    'email': [
      { type: 'required', message: 'This Required Field' },
      { type: 'email', message: 'example :name@Ezaula.com' },
    ],
    'password': [
      { type: 'required', message: 'This Required Field' },
      { type: 'minlength', message: 'This Field should be at least 6 char' }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'rememberMe': new FormControl(false)
    });
  }
  login() {

  }
}
