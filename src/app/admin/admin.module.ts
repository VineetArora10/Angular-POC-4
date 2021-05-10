import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule } from '@angular/forms';
import { EmpdataComponent } from './empdata/empdata.component';




@NgModule({
  declarations: [
    AdmindashboardComponent,
    EmpdataComponent,
  
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AdmindashboardComponent
  ]
})
export class AdminModule { }

