import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gioi-thieu-chung',
  templateUrl: './gioi-thieu-chung.component.html',
  styleUrls: ['./gioi-thieu-chung.component.css'],
})
export class GioiThieuChungComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
