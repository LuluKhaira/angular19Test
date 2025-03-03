import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule 
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) {}

  onLogin() {
    console.log(this.myForm.value);
  }
}