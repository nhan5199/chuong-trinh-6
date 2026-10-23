import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sach-ban-do',
  templateUrl: './sach-ban-do.component.html',
  styleUrls: ['../../../shared/styles/book-core.css',
    '../../../shared/styles/book-scan.css',
    './sach-ban-do.component.css']
})
export class SachBanDoComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
