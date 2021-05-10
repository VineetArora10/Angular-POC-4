import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(){
if(localStorage.getItem("currentuser")){
  return true;
}
this.router.navigateByUrl('');
return false;
  }
  
  }
  