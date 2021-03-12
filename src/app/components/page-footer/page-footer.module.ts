import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PageFooterComponent } from './page-footer.component';

@NgModule({
  declarations: [
    PageFooterComponent,
  ],
  imports: [CommonModule,
    BrowserModule],
  exports: [PageFooterComponent],
  providers: [],
})
export class PageFooterModule {}
