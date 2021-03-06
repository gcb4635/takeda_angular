import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../account.service';
import { Constants } from '../../../../config/constant';
@Injectable()
@Injectable()
export class SitesGuard implements CanActivate {
  public constants = Constants;
  constructor(private accountService: AccountService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const role = this.accountService.checkRole();
    if (role === this.constants.sitesId) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
