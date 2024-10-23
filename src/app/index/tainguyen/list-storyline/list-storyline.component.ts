import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-storyline',
  templateUrl: './list-storyline.component.html',
  styleUrls: ['./list-storyline.component.css'],
})
export class ListStorylineComponent {
  constructor(private readonly _router: Router) {}

  ngOnInit(): void {}

  onClickNavigate(url: string) {
    this._router.navigateByUrl(url);
  }
}
