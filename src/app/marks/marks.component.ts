import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  constructor(private http:HttpClient, private router:Router){}


  obj: any;
  names: any;
  subjects: any;
  marks: any;
  mark_list: any;
  sub_list: any;

  redirect(id: any): void{
    let route = '/mform/';
    if (id != null){
      this.router.navigate([route, id]);
    } else {
      this.router.navigate([route]);
    }
  }

  getStudentsNames(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => {this.names = data;} 
    )
  }

  getSubjects(): void{
    this.http.get("http://127.0.0.1:8000/subjects/").subscribe(
      data => {this.subjects = data; this.subListMaker();} 
    )
  }

  subListMaker(): void{
    this.sub_list = []
    for(let i in this.subjects){
      let x = this.subjects[i].subject
      this.sub_list.push(x)
    }
    console.log(this.sub_list)
  }

  testing(): void{
    this.mark_list = []
    for(let i in this.obj){
      let x = Object.keys(this.obj[i])[0];
      let mark: any;
      mark = Object.values(this.obj[i])[0];
      mark['name'] = x
      this.mark_list.push(mark)
    }
  }

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/marktab/").subscribe(
      data => {this.obj = data; this.getStudentsNames(); this.getSubjects(); this.testing();}
    )
  }
}
