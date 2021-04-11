import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenService } from './token.service';

@Injectable()
export class GuardTokenService implements CanActivate {

  public constructor(private router: Router, private tokenService: TokenService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (route.queryParams.token) {
      return this.tokenService.post(null, {
        postfix: `validate/${route.queryParams.token}`
      }).pipe(
        map(response => {
          if (response.validity > 0) {
            return true;
          }
          return this.router.navigate(['/error'], { state: response });
        })
      ) as Observable<boolean | UrlTree>;
    }

    return this.router.navigate(['/error']);
  }

}
