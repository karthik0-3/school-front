import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  constructor(private http:HttpClient){}

  obj:any;

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/avgmarks/").subscribe(
      data => this.obj = data 
    )
  }
}
