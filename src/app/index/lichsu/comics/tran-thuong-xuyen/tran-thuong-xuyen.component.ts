import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tran-thuong-xuyen',
  templateUrl: './tran-thuong-xuyen.component.html',
  styleUrls: ['../../../../shared/styles/reader-font.css',
    '../../../../shared/styles/book-core.css',
    '../../../../shared/styles/book-comic.css',
    './tran-thuong-xuyen.component.css']
})
export class TranThuongXuyenComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }
}
