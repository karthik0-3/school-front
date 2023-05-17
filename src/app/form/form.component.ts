import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
  constructor(private http:HttpClient, private router:Router){}

  names: any;

  onSubmit(data: {name: string}){
    this.http.post("http://127.0.0.1:8000/students/", data).subscribe(
      (res) => {});

    setTimeout(() => {
      this.router.navigate(['/students']);
  }, 500);  

  }
}
