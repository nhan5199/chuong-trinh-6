import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nguyen-tri-phuong-mucluc',
  templateUrl: './nguyen-tri-phuong-mucluc.component.html',
  styleUrls: ['./nguyen-tri-phuong-mucluc.component.css'],
})
export class NguyenTriPhuongMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
