import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import { VerticalFormComponent } from "./vertical-form.component";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: VerticalFormComponent,
  }
];

@NgModule({
  declarations: [VerticalFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class VerticalFormModule { }
