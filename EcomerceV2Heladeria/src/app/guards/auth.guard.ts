import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root' // ADDED providedIn root here.
})
export class AuthGuard implements CanActivate {

  public constructor(
    private authService: AuthService,
    private router:Router
  ){}

  canActivate():boolean{
    if(!this.authService.isAuth()){
      console.log('Token no es valido o ya expiro');
      this.router.navigate(['/login'])
      return false;
    }
    return true;
  }

}
