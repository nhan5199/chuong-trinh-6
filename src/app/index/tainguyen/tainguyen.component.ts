import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tainguyen',
  templateUrl: './tainguyen.component.html',
  styleUrls: ['./tainguyen.component.css'],
})
export class TainguyenComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
