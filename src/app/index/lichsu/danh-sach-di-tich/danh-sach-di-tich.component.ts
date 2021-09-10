import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-di-tich',
  templateUrl: './danh-sach-di-tich.component.html',
  styleUrls: ['./danh-sach-di-tich.component.css']
})
export class DanhSachDiTichComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
