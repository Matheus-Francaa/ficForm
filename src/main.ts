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



//parte de visualização de formularios
interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'checkbox';
  value: string | number | boolean;
  required?: boolean;
  options?: string[];
}
interface FormConfig{
  title: string;
  fields: FormField[];
}
class FormViewer{
  private container: HTMLElement;
  private config: FormConfig;
  private formElement: HTMLFormElement;

  constructor(containerId: string, config: FormConfig) {
    const container = document.getElementById(containerId);
    if (!container){
      throw new Error(`Container with id ${containerId} not found`);
    }
    this.container = container;
    this.config = config;
    this.formElement = document.createElement('form');
  }
}
// 2° parte de visualização de formularios (alguem irá fazer).