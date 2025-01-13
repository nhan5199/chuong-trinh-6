import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dai-ki-niem-mucluc',
  templateUrl: './dai-ki-niem-mucluc.component.html',
  styleUrls: ['../muc-luc.css'],
})
export class DaiKiNiemMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
