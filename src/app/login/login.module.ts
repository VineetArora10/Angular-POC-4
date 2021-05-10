import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonloginComponent } from './commonlogin/commonlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CommonloginComponent,
    UserloginComponent,
    AdminloginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CommonloginComponent,
    UserloginComponent,
    AdminloginComponent
  ]
})
export class LoginModule { }

