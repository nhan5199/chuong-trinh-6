import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-vinh-cuu-test',
  templateUrl: './vinh-cuu-test.component.html',
  styleUrls: ['./vinh-cuu-test.component.css']
})
export class VinhCuuTestComponent implements OnInit {
  answerForm !: FormGroup;
  constructor(
    private _formBuilder : FormBuilder
    ,private modalService : NgbModal
    ,private location : Location
  ) { }

  point : number = 0;
  string = 'n3ifb3iu4v3';
  ngOnInit(): void {
    this.answerForm = this._formBuilder.group({
      cau1:['',[Validators.required]],
      cau2:['',[Validators.required]],
      cau3:['',[Validators.required]],
      cau4:['',[Validators.required]],
      cau5:['',[Validators.required]],
      cau6:['',[Validators.required]],
      cau7:['',[Validators.required]],
      cau8:['',[Validators.required]],
      cau9:['',[Validators.required]],
      cau10:['',[Validators.required]],

    })
  }

  cancel(){
    this.location.back();
  }
  // open(content : any, point : number) {
  //   this.modalService.open(content,{ centered: true });
  // }
  get answerFormValue(){
    return this.answerForm.value;
  }
  isSubmit = false;
  onSubmit(){
    this.point = 0;
    console.log(this.answerForm.value);
    if (this.answerForm.value.cau1 == 'A'){
      this.point = this.point + 1;  
    }
    if (this.answerForm.value.cau2 == 'B'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau3 == 'C'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau4 == 'A'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau5 == 'C'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau6 == 'C'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau7 == 'B'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau8 == 'B'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau9 == 'A'){
      this.point =this.point + 1;
    }
    if (this.answerForm.value.cau10 == 'C'){
      this.point =this.point + 1;
    }
    console.log('diem', this.point);
    this.isSubmit = true;
    console.log('diem', this.isSubmit);
    // this.open(content, this.point);
  }

}
