import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageFooterComponent } from './page-footer.component';

@NgModule({
  declarations: [
    PageFooterComponent,
  ],
  imports: [CommonModule],
  exports: [PageFooterComponent],
  providers: [],
})
export class PageFooterModule {}
