import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minion',
  templateUrl: './minion.component.html',
  styleUrls: ['./minion.component.scss']
})
export class MinionComponent {

  @Input() public darkColor: string;
  @Input() public backgroundFlag: string;
  @Input() public primaryColor: string;

  public showPopover: boolean;
}
