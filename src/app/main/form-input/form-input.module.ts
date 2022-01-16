import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FormInputComponent} from "./form-input.component";

const routes: Routes = [
  {
    path: '',
    component: FormInputComponent
  }
]

@NgModule({
  declarations: [FormInputComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule
  ]
})
export class FormInputModule {
}
