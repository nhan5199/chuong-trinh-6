import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dinh-tan-lan-mucluc',
  templateUrl: './dinh-tan-lan-mucluc.component.html',
  styleUrls: ['./dinh-tan-lan-mucluc.component.css'],
})
export class DinhTanLanMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
