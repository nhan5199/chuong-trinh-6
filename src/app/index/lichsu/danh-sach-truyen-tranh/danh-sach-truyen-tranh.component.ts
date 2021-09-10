import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-truyen-tranh',
  templateUrl: './danh-sach-truyen-tranh.component.html',
  styleUrls: ['./danh-sach-truyen-tranh.component.css']
})
export class DanhSachTruyenTranhComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
