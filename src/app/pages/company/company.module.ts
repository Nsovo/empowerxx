import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PageFooterModule } from 'src/app/components/page-footer/page-footer.module';
import { CompanyComponent } from './company.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    CompanyComponent,
    ContactComponent,
    TermsComponent,
    PrivacyComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    PageFooterModule,
    RouterModule.forChild([
      { path: '', component: CompanyComponent }])
  ],
  exports: [ContactComponent, TermsComponent, PrivacyComponent ],
  providers: [],
})
export class CompanyModule {}
