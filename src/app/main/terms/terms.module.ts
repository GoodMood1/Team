import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TermsComponent} from "./terms.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {
    path: '',
    component: TermsComponent
  }
]

@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
  ]
})
export class TermsModule {
}
