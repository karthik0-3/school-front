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
  keys: any;

  redirect(id: any): void{
    let route = '/mform/';
    if (id.id != null){
      this.router.navigate([route, id.id]);
    } else {
      this.router.navigate([route]);
    }
  }

  // prepareTable(): void{
  //   let made_table:any[]; 
  //   made_table = []
  //   for (let i in this.names){
  //     let temp_marks: any = {name: this.names[i].name};
  //     for (let j in this.subjects){
  //       let sub_mark = {}
  //       for (let k in this.obj){
  //         if (this.names[i].id == this.obj[k].name && this.subjects[j].id == this.obj[k].subject){
  //           sub_mark = {"mark": this.obj[k].mark, "id": this.obj[k].id}
  //           break;
  //         } else {
  //           sub_mark = {"mark": "", "id": null};
  //         }
  //       }
  //       temp_marks[this.subjects[j].subject] = sub_mark;
  //     } 
  //     made_table.push(temp_marks);
  //   } 
  //   this.marks = made_table;
  // }

  getStudentsNames(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => {this.names = data;} 
    )
  }

  getSubjects(): void{
    this.http.get("http://127.0.0.1:8000/subjects/").subscribe(
      data => {this.subjects = data;} 
    )
  }

  testing(): void{
    this.keys = []
    console.log(this.obj[0])
    for(let i in this.obj){
      let x = Object.keys(this.obj[i]);
      this.keys.push(x)
    }
    const subjects = [];
    // loop thru the keys
    // use this.obj to get the subs from the key above
    // [{english: {mark: 12, id: 89}}]
    console.log(this.obj.keys[0])
    
  }

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/marktab/").subscribe(
      data => {this.obj = data; this.getStudentsNames(); this.getSubjects(); this.testing();}
    )
  }
}
