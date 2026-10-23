import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  @Input() name = '';
  @Input() icon = '';
  @Input() router = '';
  @Input() currentActive = '';
  @Output() onClickEvent = new EventEmitter<string>();

  onClickMenuItem(): void { this.onClickEvent.emit(this.router); }
}
