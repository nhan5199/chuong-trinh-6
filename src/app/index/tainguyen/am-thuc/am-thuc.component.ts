import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-am-thuc',
  templateUrl: './am-thuc.component.html',
  styleUrls: ['../../../shared/styles/image-lesson.css']
})
export class AmThucComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }


}
