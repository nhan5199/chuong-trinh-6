import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gioi-thieu-chung-video',
  templateUrl: './gioi-thieu-chung-video.component.html',
  styleUrls: ['./gioi-thieu-chung-video.component.css'],
})
export class GioiThieuChungVideoComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate() {
    this._router.navigateByUrl('/gioithieuchung');
  }
}
