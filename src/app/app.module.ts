import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ViewsComponent } from './views/views.component';
import { MarksComponent } from './marks/marks.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SubjectformComponent } from './subjectform/subjectform.component';
import { MarksformComponent } from './marksform/marksform.component';
import { RemovestudentComponent } from './removestudent/removestudent.component';
import { MarksdetailsComponent } from './marksdetails/marksdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    MarksComponent,
    SummaryComponent,
    FormComponent,
    SubjectformComponent,
    MarksformComponent,
    RemovestudentComponent,
    MarksdetailsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
