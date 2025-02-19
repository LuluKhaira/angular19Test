import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userForm : FormGroup = new FormGroup({
  //   userName : new FormControl(""),
  //   passwowrd : new FormControl("")
  // })

  userName: FormControl = new FormControl("");
  
  password: FormControl = new FormControl("");

  router = inject(Router);
 
  onLogin() {
    debugger;
    if (this.userName.value == "admin" && this.password.value == "") {
      this.router.navigateByUrl("dashboard")
    } else {
      alert("wrong ap")
    }
  }
}
