import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BasicTablesComponent} from "./basic-tables.component";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: BasicTablesComponent
  }
]

@NgModule({
  declarations: [BasicTablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class BasicTablesModule {
}
