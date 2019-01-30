import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'
import { ApiServiceService } from './api-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router,public apiService:ApiServiceService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const token=this.apiService.getDataFromLocal('token')
      if (token == undefined || token == null) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
}
