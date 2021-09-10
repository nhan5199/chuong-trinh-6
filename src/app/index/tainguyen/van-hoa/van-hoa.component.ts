import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-van-hoa',
  templateUrl: './van-hoa.component.html',
  styleUrls: ['./van-hoa.component.css']
})
export class VanHoaComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
