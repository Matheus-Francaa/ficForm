import { Component, EventEmitter, Output } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent {
  forms: string[] = [];
  @Output() formSelected = new EventEmitter<string>();

  constructor(private formService: FormService) {
    this.forms = this.formService.getForms();
  }

  selectForm(form: string) {
    this.formSelected.emit(form);
  }
}
