import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-hoi',
  templateUrl: './le-hoi.component.html',
  styleUrls: ['./le-hoi.component.css']
})
export class LeHoiComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
