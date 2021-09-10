import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialy',
  templateUrl: './dialy.component.html',
  styleUrls: ['./dialy.component.css']
})
export class DialyComponent implements OnInit {
  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }

}
