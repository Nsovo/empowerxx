import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PageFooterModule } from 'src/app/components/page-footer/page-footer.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    PageFooterModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }])
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
