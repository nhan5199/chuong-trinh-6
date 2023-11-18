import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trinh-hoai-duc-mucluc',
  templateUrl: './trinh-hoai-duc-mucluc.component.html',
  styleUrls: ['./trinh-hoai-duc-mucluc.component.css'],
})
export class TrinhHoaiDucMuclucComponent implements OnInit {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
