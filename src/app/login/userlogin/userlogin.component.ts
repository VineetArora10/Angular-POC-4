import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from './service/userauth.service';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
public EmpEmail:any;
public EmpId:any;
public EmpPassword:any;
constructor(private router:Router,
   private userauth:UserauthService
) { }
ngOnInit(): void {}
  userlogin(){
    if(this.userauth.userlogin(this.EmpId,this.EmpEmail,this.EmpPassword)){
      this.router.navigateByUrl('employeedetails');
    }
  }
}
