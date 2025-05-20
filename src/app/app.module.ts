import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormDisplayComponent } from './components/form-display/form-display.component';

// Removed AppModule since standalone components use bootstrapApplication in main.ts
