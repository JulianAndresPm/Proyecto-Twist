import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { environment } from 'src/env/environment';
import { login } from '../models/login.model';
import { register } from '../models/register.model';

@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})

export class AuthService {

  public constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService  
  ){}

  public authentication(input:login):Observable<any>{
    const url = `${environment.ApiEndPoint}/login`;
    return this.http.post(url,input);
  }

  public isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token)  || !localStorage.getItem('token')){
      return false;
    }
    return true;

  }

  public addUser(input:register):Observable<any>{
    const url = `${environment.ApiEndPoint}/register`;
    return this.http.post(url,input);
  }
}



