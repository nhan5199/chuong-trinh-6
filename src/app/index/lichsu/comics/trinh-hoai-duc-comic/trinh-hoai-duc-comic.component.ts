import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trinh-hoai-duc-comic',
  templateUrl: './trinh-hoai-duc-comic.component.html',
  styleUrls: ['./trinh-hoai-duc-comic.component.css']
})
export class TrinhHoaiDucComicComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }
}
