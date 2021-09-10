import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nguyen-huu-canh-comic',
  templateUrl: './nguyen-huu-canh-comic.component.html',
  styleUrls: ['./nguyen-huu-canh-comic.component.css']
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
