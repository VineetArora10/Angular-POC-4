import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  ,exports:[
    DetailsComponent
  ]
})
export class EmployeeModule { }
