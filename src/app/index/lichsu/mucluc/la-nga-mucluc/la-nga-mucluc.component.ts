import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-la-nga-mucluc',
  templateUrl: './la-nga-mucluc.component.html',
  styleUrls: ['./la-nga-mucluc.component.css'],
})
export class LaNgaMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
