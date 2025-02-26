import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './menu/login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import ini

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // ✅ Tambahkan ini
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
