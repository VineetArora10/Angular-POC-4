import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/login/userlogin/service/userauth.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
public emname:any;
public emid:any;
public emdept:any;
public obj=JSON.parse(localStorage.getItem("currentuser"));
public name=this.obj.name;
public id=this.obj.id;
public department=this.obj.department;
public currentuserindex=this.obj.index;
editclicked=false;
  constructor(private userauth:UserauthService) { }
  ngOnInit(): void {}
edit(){
    this.emname=this.name;
    this.emid=this.id;
    this.emdept=this.department;
    this.editclicked=true;
  }
update(){
    this.name=this.emname;
    this.id=this.emid;
    this.department=this.emdept;
    if(localStorage.getItem("data")){
      this.userauth.details=JSON.parse(localStorage.getItem("data"));
      this.userauth.details[this.currentuserindex].name=this.emname;
      this.userauth.details[this.currentuserindex].id=this.emid;
      this.userauth.details[this.currentuserindex].department=this.emdept;
      localStorage.setItem("data",JSON.stringify(this.userauth.details));
    }else{
    this.userauth.details[this.currentuserindex].name=this.emname;
    this.userauth.details[this.currentuserindex].id=this.emid;
    this.userauth.details[this.currentuserindex].department=this.emdept;
    
     }
  this.editclicked=false;

}

