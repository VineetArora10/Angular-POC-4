import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor(private router:Router) { }
  adminlogin(email,password){
   if(email=="admin" && password=="adminpass"){
     localStorage.setItem("admin","pass");
        return true;
   }
   this.router.navigateByUrl('');
   return false;
  }
}
