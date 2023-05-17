import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'app-marksdetails',
  templateUrl: './marksdetails.component.html',
  styleUrls: ['./marksdetails.component.css']
})

export class MarksdetailsComponent {
  constructor(
    private http:HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  _subjects: any; //_ var are for get method
  _names: any;
  _marks: any;

  show_name = {"name": "", "id": ""};
  show_sub = {"subject": "", "id": ""};

  mark_id: any;
  mark_data: any;

  // form controls
  editForm = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    mark: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
  })

  getSubjects(): void{
    this.http.get("http://127.0.0.1:8000/subjects/").subscribe(
      data => {this._subjects = data;}
    );
  }  

  getMarks(): void{
    this.http.get("http://127.0.0.1:8000/marks/").subscribe(
      data => {this._marks = data;}
    );
  }

  getSelection(): void{
    this.http.get("http://127.0.0.1:8000/marks/"+this.mark_id).subscribe(
      data => {this.mark_data = data; this.getSubAndName();}
    );
  }

  getSubAndName(): void{
    for (let i in this._names){
      if (this.mark_data.name == this._names[i].id){
        this.show_name.name = this._names[i].name;
        this.show_name.id = this.mark_data.name;
      }
    }
    
    for (let i in this._subjects){
      if (this.mark_data.subject == this._subjects[i].id){
        this.show_sub.subject = this._subjects[i].subject;
        this.show_sub.id = this.mark_data.subject;
      }
    }
    this.editForm.setValue({name: this.show_name.id, subject: this.show_sub.id, mark: null})

  }

  onSubmit(data: any){
    this.http.patch("http://127.0.0.1:8000/marks/"+this.mark_id+"/", data).subscribe(
      res => {});

    setTimeout(() => {
      this.router.navigate(['/marks']);
  }, 500);  
  }

  ngOnInit(): void{
    this.route.paramMap.subscribe(params => {
      this.mark_id = params.get('id');
    });
    
    this.http.get("http://127.0.0.1:8000/students/").subscribe(
      data => {this._names = data; 
        this.getSubjects(); 
        this.getMarks(); 
        this.getSelection();
      }
      //
    );
  }  
    // this.http.post("http://127.0.0.1:8000/marks/", data.marks).subscribe(
    //   (res) => {
    //     console.log(res);
    // });
    // this.http.post("http://127.0.0.1:8000/subjects/", data.subject).subscribe(
    //   (res) => {
    //     console.log(res);
    // });

}
