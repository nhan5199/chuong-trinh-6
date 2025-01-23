import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import constant from 'src/app/shared/constant';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.css'],
})
export class TestComponent implements OnInit {
  answerForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {}

  point: number = 0;
  testTitle: string | undefined = '';

  listQuestions: any;
  ngOnInit(): void {
    debugger;
    this.listQuestions = constant.LIST_QUESTIONS.find(
      (x) => x.name == this.router.url?.split('_')[0]?.split('/')[1]
    )?.questions;

    this.testTitle = constant.TEST_TITLE.find(
      (x) => x.code == this.router.url?.split('_')[0]?.split('/')[1]
    )?.title;

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
    if (this.answerForm.value.cau1 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau2 == 'B') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau3 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau4 == 'C') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau5 == 'B') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau6 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau7 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau8 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau9 == 'A') {
      this.point = this.point + 1;
    }
    if (this.answerForm.value.cau10 == 'C') {
      this.point = this.point + 1;
    }
    console.log('diem', this.answerForm.value);
    this.isSubmit = true;
  }

  cancel() {
    this.location.back();
  }
}
