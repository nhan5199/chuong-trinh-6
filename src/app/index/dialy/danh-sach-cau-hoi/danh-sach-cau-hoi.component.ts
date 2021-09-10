import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-cau-hoi',
  templateUrl: './danh-sach-cau-hoi.component.html',
  styleUrls: ['./danh-sach-cau-hoi.component.css']
})
export class DanhSachCauHoiComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
