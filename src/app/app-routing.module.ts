import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './views/views.component';
import { MarksComponent } from './marks/marks.component';
import { SummaryComponent } from './summary/summary.component';
import { FormComponent } from './form/form.component';
import { SubjectformComponent } from './subjectform/subjectform.component';
import { MarksformComponent } from './marksform/marksform.component';
import { RemovestudentComponent } from './removestudent/removestudent.component';
import { MarksdetailsComponent } from './marksdetails/marksdetails.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes  =  [
  {path: 'students', component: ViewsComponent },
  {path: 'marks', component: MarksComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'form', component: FormComponent},
  {path: 'subform', component: SubjectformComponent},
  {path: 'mform', component: MarksformComponent},
  {path: 'mform/:id', component: MarksdetailsComponent},
  {path: 'rform', component: RemovestudentComponent},
  {path: '', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
