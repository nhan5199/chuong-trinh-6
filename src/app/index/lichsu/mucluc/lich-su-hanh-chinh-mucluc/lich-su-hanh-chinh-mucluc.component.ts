import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lich-su-hanh-chinh-mucluc',
  templateUrl: './lich-su-hanh-chinh-mucluc.component.html',
  styleUrls: ['../muc-luc.css'],
})
export class LichSuHanhChinhMuclucComponent implements OnInit {
  constructor(private location: Location, private readonly _router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.location.back();
  }

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
