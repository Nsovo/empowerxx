import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFaqComponent } from './pages/candidate/candidate-faq/candidate-faq.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { PrivacyComponent } from './pages/company/privacy/privacy.component';
import { TermsComponent } from './pages/company/terms/terms.component';
import { EmployerFaqComponent } from './pages/employer/employer-faq/employer-faq.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'candidate',
    loadChildren: () =>
      import('./pages/candidate/candidate.module').then((m) => m.CandidateModule),
  },
  {
    path: 'employer',
    loadChildren: () =>
      import('./pages/employer/employer.module').then((m) => m.EmployerModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./pages/company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/user/login/login.module').then((m) => m.LoginModule),
  },
  { path: 'candidate/faq', component: CandidateFaqComponent },
  { path: 'employer/faq', component: EmployerFaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
