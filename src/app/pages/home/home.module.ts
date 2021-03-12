import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HeaderModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }])
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
