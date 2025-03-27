import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { // Tambahkan Router di sini
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Sign-up successful', this.signupForm.value);
      // Add your authentication logic here
      this.router.navigate(['/login']);
    } else {
      console.log('Form has errors');
      this.signupForm.markAllAsTouched();
    }
  }

  forgotPassword() {
    console.log('Forgot password clicked');
    // Add your forgot password logic here
  }

  goToLogin() {
    console.log('Signup clicked');
    this.router.navigate(['/login']); // Pastikan ini bisa dijalankan
  }

  
}
