import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdmindashboardComponent } from 'src/app/admin/admindashboard/admindashboard.component';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {

  constructor(private router:Router) { }
  details=[{name:"shubham",id:1,department:"first",email:"user1",password:"password1",index:0},{name:"vineet",id:2,department:"second",email:"user2",password:"password2",index:1},{name:"sagar",id:3,department:"first",email:"user3",password:"password3",index:2},{name:"prashant",id:4,department:"second",email:"user4",password:"password4",index:3},{name:"shyamlata",id:5,department:"first",email:"user5",password:"password5",index:4}];

  userlogin(id,email,password){
    if(JSON.parse(localStorage.getItem("data"))){
      this.details=JSON.parse(localStorage.getItem("data"));
    }
    for(let i=0;i<this.details.length;i++){
      if(id==this.details[i].id && email==this.details[i].email && password==this.details[i].password){
        localStorage.setItem("currentuser",JSON.stringify(this.details[i]));
        return true;
      }
    }
    this.router.navigateByUrl('');
    return false;
  }
}