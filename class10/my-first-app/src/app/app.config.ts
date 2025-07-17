import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // added import
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
 providers: [
 provideZoneChangeDetection({ eventCoalescing: true }),
 provideRouter(routes), // Added provide
 provideHttpClient() // Added provider
 ]
};
