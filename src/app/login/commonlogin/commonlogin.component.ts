import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonlogin',
  templateUrl: './commonlogin.component.html',
  styleUrls: ['./commonlogin.component.css']
})
export class CommonloginComponent implements OnInit {
constructor(private router:Router) { }
ngOnInit(): void {}

gotouserlogin(){
this.router.navigateByUrl('userlogin');
}
gotoadminlogin(){
  this.router.navigateByUrl('adminlogin');
}
}
