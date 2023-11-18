import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lichsu',
  templateUrl: './lichsu.component.html',
  styleUrls: ['./lichsu.component.css'],
})
export class LichsuComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
