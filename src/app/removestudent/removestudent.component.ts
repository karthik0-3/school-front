import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removestudent',
  templateUrl: './removestudent.component.html',
  styleUrls: ['./removestudent.component.css']
})
export class RemovestudentComponent {
  constructor(private http:HttpClient, private router:Router){}

  _names: any; //_ var are for get method

  onRemove(data: {name: string}){
    console.log(data.name)
    this.http.delete("http://127.0.0.1:8000/students/"+data.name).subscribe(
      (res) => {
        console.log(res);
    });

    setTimeout(() => {
      this.router.navigate(['/students']);
    }, 500);  

  } 

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => {this._names = data;}
    )
  }  
}
