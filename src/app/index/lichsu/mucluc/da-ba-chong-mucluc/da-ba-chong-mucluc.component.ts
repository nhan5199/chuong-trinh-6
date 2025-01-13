import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-da-ba-chong-mucluc',
  templateUrl: './da-ba-chong-mucluc.component.html',
  styleUrls: ['../muc-luc.css'],
})
export class DaBaChongMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
