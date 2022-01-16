import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormValidationComponent} from './form-validation.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: FormValidationComponent
  }
]


@NgModule({
  declarations: [
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class FormValidationModule {
}
