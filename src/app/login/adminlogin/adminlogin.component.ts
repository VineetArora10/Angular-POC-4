import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from '../userlogin/service/userauth.service';
import { AdminauthService } from './adminservice/adminauth.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public email:any;
  public password:any;
  constructor(
  private router:Router,
  private adminauth:AdminauthService,
  private userauth:UserauthService
  ) { }

  ngOnInit(): void {}
  adminlogin(){
    if(this.adminauth.adminlogin(this.email,this.password))
    localStorage.setItem("data",JSON.stringify(this.userauth.details))
    this.router.navigateByUrl('admindashboard');
    }
  }