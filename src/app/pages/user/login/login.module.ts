import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { PageFooterModule } from 'src/app/components/page-footer/page-footer.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { UserService } from 'src/app/services/user/user.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderModule,
    PageFooterModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }])
  ],
  exports: [],
  providers: [AuthenticationService, AlertService , UserService],
})

export class LoginModule {}
