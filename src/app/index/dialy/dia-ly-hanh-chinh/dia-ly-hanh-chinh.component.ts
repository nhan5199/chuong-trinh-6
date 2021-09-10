import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia-ly-hanh-chinh',
  templateUrl: './dia-ly-hanh-chinh.component.html',
  styleUrls: ['./dia-ly-hanh-chinh.component.css']
})
export class DiaLyHanhChinhComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }
}
