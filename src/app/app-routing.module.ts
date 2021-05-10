import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { EmpdataComponent } from './admin/empdata/empdata.component';
import { DetailsComponent } from './employee/details/details.component';
import { AdminloginComponent } from './login/adminlogin/adminlogin.component';
import { AdminauthguardGuard } from './login/adminlogin/guard/adminauthguard.guard';
import { CommonloginComponent } from './login/commonlogin/commonlogin.component';
import { UserauthGuard } from './login/userlogin/guard/userauth.guard';
import { UserloginComponent } from './login/userlogin/userlogin.component';

const routes: Routes = [
  {
    path:'commonloginpage',
    component:CommonloginComponent
  },{
    path:'userlogin',
    component:UserloginComponent
  },
  {
    path:'adminlogin',
    component:AdminloginComponent
  },{
    path:'',
    component:CommonloginComponent
  },{
    path:'employeedetails',
    component:DetailsComponent,canActivate:[UserauthGuard]
  },{
    path:'admindashboard',
    component:AdmindashboardComponent,canActivate:[AdminauthguardGuard]
  },{
    path:'employeedata/:id',
    component:EmpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
