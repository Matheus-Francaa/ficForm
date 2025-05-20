import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private forms = [
    'Formulário A',
    'Formulário B',
    'Formulário C',
    'Formulário D',
    'Formulário E',
    'Formulário F',
    'Formulário G',
    'Formulário H'
  ];

  constructor() { }

  getForms(): string[] {
    return this.forms;
  }
}
