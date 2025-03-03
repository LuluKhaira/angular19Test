import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Pastikan ini ada
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
