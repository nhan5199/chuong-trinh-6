import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lich-su-hanh-chinh-mucluc',
  templateUrl: './lich-su-hanh-chinh-mucluc.component.html',
  styleUrls: ['./lich-su-hanh-chinh-mucluc.component.css']
})
export class LichSuHanhChinhMuclucComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back();
  }
}
