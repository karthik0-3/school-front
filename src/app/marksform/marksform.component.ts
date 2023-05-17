import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marksform',
  templateUrl: './marksform.component.html',
  styleUrls: ['./marksform.component.css']
})
export class MarksformComponent {
  constructor(private http:HttpClient, private router: Router){}

  _subjects: any; //_ var are for get method
  _names: any;
  _marks: any;

  onSubmit(data: {name: string, subject: string, mark: string}){
    this.http.post("http://127.0.0.1:8000/marks/", data).subscribe(
      (res) => {});

    setTimeout(() => {
      this.router.navigate(['/marks']);
    }, 500);  
  }

  getMarks(){
    this.http.get("http://127.0.0.1:8000/marks/").subscribe(
      data => {this._marks = data}
    );
  }

  getSubjects(){
    this.http.get("http://127.0.0.1:8000/subjects/").subscribe(
      data => {this._subjects = data}
    );
  }  

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
        data => {this._names = data; this.getSubjects(); this.getMarks();}
    )
  }  
}
