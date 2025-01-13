import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chua-dai-giac-mucluc',
  templateUrl: './chua-dai-giac-mucluc.component.html',
  styleUrls: ['../muc-luc.css'],
})
export class ChuaDaiGiacMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
