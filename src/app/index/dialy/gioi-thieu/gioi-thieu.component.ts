import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.css']
})
export class GioiThieuComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
