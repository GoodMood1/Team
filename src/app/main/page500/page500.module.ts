import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Page500Component} from "./page500.component";
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: Page500Component
  }
]

@NgModule({
  declarations: [Page500Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class Page500Module {
}
