// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { FormListComponent } from './app/components/form-list/form-list.component';
import { FormDisplayComponent } from './app/components/form-display/form-display.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'form-list', pathMatch: 'full' },
      { path: 'form-list', component: FormListComponent },
      { path: 'form-display', component: FormDisplayComponent }
    ])
  ]
});
