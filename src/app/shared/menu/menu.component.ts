import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  currentActive: string = '';
  listMenuItems: any[] = [
    { name: 'Vị trí', icon: 'fas fa-map-marker-alt', routerLink: 'vitri' },
    { name: 'Nội dung', icon: 'fas fa-book-reader', routerLink: 'noidung' },
    {
      name: 'Giới thiệu',
      icon: 'fas fa-info-circle',
      routerLink: 'gioithieuchung',
    },
    { name: 'Lịch sử', icon: 'fas fa-hourglass-half', routerLink: 'lichsu' },
    { name: 'Địa lí', icon: 'fas fa-globe-asia', routerLink: 'dialy' },
    { name: 'Tài nguyên', icon: 'fas fa-gem', routerLink: 'tainguyen' },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    // this.currentActive = window.location.href?.split('/')[1];
  }

  onClickMenuItem(router: string) {
    // this.currentActive = window.location.href?.split('/')[1];
    this.currentActive = router;
    this.router.navigateByUrl(`/${router}`);
  }
}
