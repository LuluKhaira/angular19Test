// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted successfully', this.loginForm.value);
      // Add your authentication logic here
    } else {
      console.log('Form has validation errors');
      this.loginForm.markAllAsTouched();
    }
  }
  
  forgotPassword() {
    console.log('Forgot password clicked');
    // Add your forgot password logic here
  }
  
  signup() {
    console.log('Signup clicked');
    // Add your signup navigation logic here
  }
}