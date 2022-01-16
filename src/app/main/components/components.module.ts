import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsComponent} from "./components.component";
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent
  }
]

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTabsModule
  ]
})
export class ComponentsModule { }
