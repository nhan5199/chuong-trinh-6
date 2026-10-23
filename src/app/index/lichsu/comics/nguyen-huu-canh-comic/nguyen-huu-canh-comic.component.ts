import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nguyen-huu-canh-comic',
  templateUrl: './nguyen-huu-canh-comic.component.html',
  styleUrls: ['../../../../shared/styles/reader-font.css',
    '../../../../shared/styles/book-core.css',
    '../../../../shared/styles/book-comic.css',
    '../../../../shared/styles/book-stack-10.css']
})
export class NguyenHuuCanhComicComponent implements OnInit {
  constructor(
    private location : Location
  ) {
   }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }
}
