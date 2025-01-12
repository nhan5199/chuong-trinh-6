import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'project';

  ngAfterViewInit() {
    const menu = document.querySelector('app-menu');
    if (menu instanceof HTMLElement) {
      const menuHeight = menu.offsetHeight;
      document.documentElement.style.setProperty(
        '--menu-height',
        `${menuHeight}px`
      );
    }
  }
}
