import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit{
  constructor(private http:HttpClient){}

  obj:any;

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => this.obj = data 
    )
  }

}
