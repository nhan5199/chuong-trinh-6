import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cam-my-test',
  templateUrl: './cam-my-test.component.html',
  styleUrls: ['./cam-my-test.component.css'],
})
export class CamMyTestComponent implements OnInit {
  answerForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder, private location: Location) {}

  point: number = 0;
  string = 'n3ifb3iu4v3';
  ngOnInit(): void {
    this.answerForm = this._formBuilder.group({
      cau1: ['', [Validators.required]],
      cau2: ['', [Validators.required]],
      cau3: ['', [Validators.required]],
      cau4: ['', [Validators.required]],
      cau5: ['', [Validators.required]],
      cau6: ['', [Validators.required]],
      cau7: ['', [Validators.required]],
      cau8: ['', [Validators.required]],
      cau9: ['', [Validators.required]],
      cau10: ['', [Validators.required]],
    });
  }

  // open(content : any, point : number) {
  //   this.modalService.open(content,{ centered: true });
  // }
  get answerFormValue() {
    return this.answerForm.value;
  }
  isSubmit = false;
  onSubmit() {
    this.point = 0;
    console.log(this.answerForm.value);
    if (this.answerForm.value.cau1 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau2 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau3 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau4 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau5 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau6 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau7 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau8 == 'B') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau9 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau10 == 'A') {
      this.point = this.point + 1;
    }
    console.log('diem', this.point);
    this.isSubmit = true;
    console.log('diem', this.isSubmit);
    // this.open(content, this.point);
  }

  cancel() {
    this.location.back();
  }
}
