import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  public message: string;
  constructor(private route: Router) {
    this.message = `${this.route.getCurrentNavigation().extras?.state?.valid ? this.route.getCurrentNavigation().extras?.state?.valid.toLowerCase() : 'Not found'}`
  }
}
