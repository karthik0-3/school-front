import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectform',
  templateUrl: './subjectform.component.html',
  styleUrls: ['./subjectform.component.css']
})
export class SubjectformComponent {
  constructor(private http:HttpClient, private router: Router){}

  subject: any;

  onSubmit(data: {subject: string}){
    console.log(data)
    this.http.post("http://127.0.0.1:8000/subjects/", data).subscribe(
      (res) => {
        console.log(res);
    });

    setTimeout(() => {
      this.router.navigate(['/marks']);
  }, 500);  
  }
}
