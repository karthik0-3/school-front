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
  contents: any;

  pushData(): void{
    const arr: string[] = []
    for(let i in this.obj){
      let n = this.obj[i].name
      let name = n as string
      arr.push(name)
    }
    this.contents = arr
  }

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => {this.obj = data, this.pushData();} 
    )
  }
}
