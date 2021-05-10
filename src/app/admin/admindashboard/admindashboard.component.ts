import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
public data=JSON.parse(localStorage.getItem("data"));
public Empname:String;
public Empid:any;
public Empdept:any;
public EmpEmail:any;
public EmpPass:any;
public isclicked=false;
details={};
index=5;
  constructor(private router:Router) { }
ngOnInit(): void {}
add(){
  this.details={name:this.Empname,id:this.Empid,department:this.Empdept,email:this.EmpEmail,password:this.EmpPass,index:this.index}
  this.data.push(this.details);
  localStorage.setItem("data",JSON.stringify(this.data));
  this.index++;
  }
delete(index){
  this.data.splice(index,1);
  localStorage.setItem("data",JSON.stringify(this.data));
}
edit(index){
  this.Empname=this.data[index].name;
  this.Empid=this.data[index].id;
  this.EmpEmail=this.data[index].email;
  this.Empdept=this.data[index].department;
  this.EmpPass=this.data[index].password;
  this.isclicked=true;
  this.index=index;
}
update(){
this.details={name:this.Empname,id:this.Empid,department:this.Empdept,email:this.EmpEmail,password:this.EmpPass,index:this.index}
this.data[this.index]=this.details;
localStorage.setItem("data",JSON.stringify(this.data));
this.isclicked=false;
this.Empname='';
this.Empid='';
this.Empdept='';
this.EmpEmail='';
this.EmpPass='';
}
row(index){
this.router.navigate(['/employeedata',this.data[index].id])
localStorage.setItem("clickeduser",JSON.stringify(this.data[index]));
}
}

