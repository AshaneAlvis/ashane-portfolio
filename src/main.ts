import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
})
  .then(() => {
    const preloader = document.getElementById('app-preloader');
    if (preloader) {
      preloader.classList.add('app-preloader--hide');
      window.setTimeout(() => preloader.remove(), 450);
    }
  })
  .catch(err => console.error(err));
