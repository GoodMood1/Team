import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTreeModule} from "@angular/material/tree";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'tasks',
        loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
      },
      {
        path: 'companies',
        loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule)
      },
      {
        path: 'leads',
        loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule)
      },
      {
        path: 'deals',
        loadChildren: () => import('./deals/deals.module').then(m => m.DealsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'activities',
        loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'terms',
        loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule)
      },
      {
        path: 'page404',
        loadChildren: () => import('./page404/page404.module').then(m => m.Page404Module)
      },
      {
        path: 'page500',
        loadChildren: () => import('./page500/page500.module').then(m => m.Page500Module)
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule)
      },
      {
        path: 'basic-tables',
        loadChildren: () => import('./basic-tables/basic-tables.module').then(m => m.BasicTablesModule)
      },
      {
        path: 'basic-inputs',
        loadChildren: () => import('./basic-inputs/basic-inputs.module').then(m => m.BasicInputsModule)
      },
      {
        path: 'form-mask',
        loadChildren: () => import('./form-mask/form-mask.module').then(m => m.FormMaskModule)
      },
      {
        path: 'vertical-form',
        loadChildren: () => import('./vertical-form/vertical-form.module').then(m => m.VerticalFormModule)
      },
      {
        path: 'horizontal-form',
        loadChildren: () => import('./horizontal-form/horizontal-form.module').then(m => m.HorizontalFormModule)
      },
      {
        path: 'form-validation',
        loadChildren: () => import('./form-validation/form-validation.module').then(m => m.FormValidationModule)
      },
      {
        path: 'mail',
        loadChildren: () => import('./mail/mail.module').then(m => m.MailModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'form-input',
        loadChildren: () => import('./form-input/form-input.module').then(m => m.FormInputModule)
      },
    ]
  },
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule
  ]
})
export class MainModule {
}
