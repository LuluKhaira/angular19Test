import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { // Tambahkan Router di sini
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

  goToSignup() {
    console.log('Signup clicked');
    this.router.navigate(['/signup']); // Pastikan ini bisa dijalankan
  }
}
