import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){ 
    if(localStorage.getItem('admin')){
      localStorage.removeItem("admin");
      return true;
    }
    this.router.navigateByUrl('');
    return false;

  }
  
}
