import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MenuleftComponent } from './layout/menuleft/menuleft.component';
import { DialogComponent } from './layout/dialog/dialog.component';
import { HeaderComponent} from './layout/header/header.component';
import { CommunicationService } from './communication.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuleftComponent,
    DialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS , useValue:{  appearance: 'fill' }},
    CommunicationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
