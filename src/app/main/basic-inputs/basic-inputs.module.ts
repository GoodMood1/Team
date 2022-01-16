import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BasicInputsComponent} from "./basic-inputs.component";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [
  {
    path: '',
    component: BasicInputsComponent
  }
]


@NgModule({
  declarations: [BasicInputsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class BasicInputsModule { }
