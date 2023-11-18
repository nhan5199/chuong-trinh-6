import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dia-ly-kinh-te',
  templateUrl: './dia-ly-kinh-te.component.html',
  styleUrls: ['./dia-ly-kinh-te.component.css'],
})
export class DiaLyKinhTeComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}
  onClickNavigate() {
    this._router.navigateByUrl('/dialy');
  }
}
