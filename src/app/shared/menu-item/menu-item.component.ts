import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnChanges {
  @Input('name') name: string = '';
  @Input('icon') icon: string = '';
  @Input('router') router: string = '';
  @Input('currentActive') currentActive: string = '';
  @Output() onClickEvent: EventEmitter<string> = new EventEmitter<string>();

  currentRouter: string | undefined = 'vitri';

  onClickMenuItem() {
    this.onClickEvent.emit(this.router);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentActive']) {
      if (this.currentActive == this.router) {
        console.log('data: ', true);
      }
    }
  }
}
