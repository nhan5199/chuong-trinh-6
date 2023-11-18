import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nguyen-huu-canh-mucluc',
  templateUrl: './nguyen-huu-canh-mucluc.component.html',
  styleUrls: ['./nguyen-huu-canh-mucluc.component.css'],
})
export class NguyenHuuCanhMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
