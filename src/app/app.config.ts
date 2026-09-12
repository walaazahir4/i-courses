import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import aura from '@primeuix/themes/aura';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
     providePrimeNG({
      theme: {
        preset: aura
      }
    }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
    
  ]
};
