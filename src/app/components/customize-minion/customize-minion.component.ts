import { Route } from '@angular/compiler/src/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customize-minion',
  templateUrl: './customize-minion.component.html',
  styleUrls: ['./customize-minion.component.scss']
})
export class CustomizeMinionComponent implements AfterViewInit {
  @ViewChild('optionSelected', { static: false }) optionElement: ElementRef;

  public darkColor: string = '#cc699f';
  public backgroundFlag: string = '#fff';
  public primaryColor: string = 'url(#linear-gradient)';
  public option: string;
  constructor(private router: Router) {
    this.option = this.router.getCurrentNavigation().extras?.state?.option;
  }

  ngAfterViewInit() {
    if (this.option) {
    this.optionElement.nativeElement.scrollIntoView({ behavior: "smooth" })
    }
  }
  public changeCompleteDarkColor(event): void {
    this.darkColor = event.color.hex;
  }

  public changeCompleteBackgroundColor(event): void {
    this.backgroundFlag = event.color.hex;
  }

  public changeCompletePrimaryColor(event): void {
    this.primaryColor = event.color.hex;
  }

}
