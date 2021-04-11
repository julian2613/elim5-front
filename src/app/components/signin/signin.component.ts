import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  public constructor(
    private router: Router,
    private tokenService: TokenService) { }

  public formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?;)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/))]),
  });

  public onSignin(): void {
    this.tokenService.post(null, {
      postfix: `${this.formGroup.controls.email.value}/generate`
    }).subscribe((response) => {
      this.router.navigate(['/test'], { queryParams: { token: response.token } });
    }, (error) => {
      this.formGroup.controls.email.setErrors({ 'error': error.error.message });
    });
  }

}
