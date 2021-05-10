import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit { 
  public id:any;
  public clicked=JSON.parse(localStorage.getItem("clickeduser"));
  public name=this.clicked.name;
  public Department=this.clicked.department;

  constructor(private activated:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getid();
  }
getid(){
  this.activated.params.subscribe((data)=>{
  this.id=data.id;
  });
}

backtoadmin(){
localStorage.removeItem("clickeduser");
this.router.navigateByUrl("admindashboard");
}
}
