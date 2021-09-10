import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-du-lich',
  templateUrl: './du-lich.component.html',
  styleUrls: ['./du-lich.component.css']
})
export class DuLichComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
