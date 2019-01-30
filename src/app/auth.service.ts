import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service'
//import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public apiService: ApiServiceService
    //  public JWTService: JwtHelperService

  ) { }

  public isAuthenticated(): boolean {
    debugger;
    const token = this.apiService.getDataFromLocal('token')
    if (token !== undefined || token !== null) {
      return false
    }
    return true


  }
}
