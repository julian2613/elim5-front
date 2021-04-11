import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IClient } from 'src/app/interfaces/client.interface';
import { ClientService } from 'src/app/services/client.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^(\s?[^\s,]+@[^\s,]+\.[^\s,]+\s?;)*(\s?[^\s,]+@[^\s,]+\.[^\s,]+)$/))]),
  });

  public constructor(
    private router: Router,
    private clientService: ClientService,
    private tokenService: TokenService) { }

  public onSignin(): void {
    let body: IClient = {
      name: this.formGroup.controls.name.value,
      email: this.formGroup.controls.email.value,
    };
    this.clientService.post(body).subscribe(() => {
      this.tokenService.post(null, {
        postfix: `${this.formGroup.controls.email.value}/generate`
      }).subscribe((response) => {
        this.router.navigate(['/test'], { queryParams: { token: response.token } });
      });
    }, (error) => {
      this.formGroup.controls.email.setErrors({ 'error': error.error.message });
    });
  }

}
