import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-danh-sach-di-tich',
  templateUrl: './danh-sach-di-tich.component.html',
  styleUrls: ['./danh-sach-di-tich.component.css'],
})
export class DanhSachDiTichComponent implements OnInit {
  constructor(private location: Location, private readonly _router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
  }

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
