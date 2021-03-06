import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PageFooterModule } from 'src/app/components/page-footer/page-footer.module';
import { CandidateFaqComponent } from './candidate-faq/candidate-faq.component';
import { CandidateComponent } from './candidate.component';

@NgModule({
  declarations: [
    CandidateComponent,
    CandidateFaqComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    PageFooterModule,
    RouterModule.forChild([
      { path: '', component: CandidateComponent },
      { path: '', component: CandidateFaqComponent }])
  ],
  exports: [CandidateFaqComponent],
  providers: [],
})
export class CandidateModule {}
