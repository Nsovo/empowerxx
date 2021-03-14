import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PageFooterModule } from 'src/app/components/page-footer/page-footer.module';
import { EmployerComponent } from './employer.component';
import { EmployerFaqComponent } from './employer-faq/employer-faq.component';

@NgModule({
  declarations: [
    EmployerComponent,
    EmployerFaqComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    PageFooterModule,
    RouterModule.forChild([
      { path: '', component: EmployerComponent }])
  ],
  exports: [EmployerFaqComponent],
  providers: [],
})
export class EmployerModule {}
