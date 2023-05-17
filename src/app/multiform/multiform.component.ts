import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiform',
  templateUrl: './multiform.component.html',
  styleUrls: ['./multiform.component.css']
})
export class MultiformComponent {
  constructor(
    private router: Router, 
    private http: HttpClient
  ){}
  
  _names: any;
  _subjects: any;

  page_number: any = 1;

  multiStepForm = new FormGroup({
      name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      mark: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  })

  getSubjects(){
    this.http.get("http://127.0.0.1:8000/subjects/").subscribe(
      data => {this._subjects = data}
    );
  }  

  nextPage(){
    this.page_number += 1
  }

  previousPage(){
    this.page_number -= 1
  }

  cancel(){
    let route = "/"
    this.router.navigate([route])
  }

  isPartlyValid(){
    if (this.multiStepForm.get('name')?.valid && this.multiStepForm.get('subject')?.valid){
      return false
    }
    else{
      return true
    }
  }

  onSubmit(data: any){
    this.http.post("http://127.0.0.1:8000/marks/", data).subscribe(
      res => {
    });

    setTimeout(() => {
      this.router.navigate(['/marks']);
    }, 500);  
  }

  ngOnInit(): void{
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
        data => {this._names = data; this.getSubjects();}
    )
  }  

}
