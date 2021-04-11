import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public showModal: boolean = false;
  constructor(public router: Router) { }

  public navigate(option: string): void {
    let navigationExtras: NavigationExtras = { state: { option } }
    this.router.navigate(['/test/customize-minion'], navigationExtras)
  }
}
