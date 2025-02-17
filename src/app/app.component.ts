import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./menu/login/login.component";
import { SignupComponent } from "./menu/signup/signup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19Test';
  
  x = 7;
  y = 19;

  user1 = "sauma";
  user2 = "lulu";
}
