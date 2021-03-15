import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import { VoidExpression } from 'typescript';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  public emailClass = '';
  public passClass = '';
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required]),
    password: new FormControl('', [
      Validators.required]),
    grant_type: new FormControl('password'),
  });

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
    // private modalService: NgbModal
    ) {}

  public ngOnInit(): void {
  }

  public validateEmail(): void {
    if (this.loginForm.controls.username.value === '') {
      this.emailClass = 'is-invalid';
    } else { this.emailClass  = 'is-valid'; }
  }

  public validatePassword(): void {
    if (this.loginForm.controls.password.value === '') {
      this.passClass = 'is-invalid';
    } else { this.passClass  = 'is-valid'; }
  }


  public login(): void {
    const data = this.loginForm.value;
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    this.validateEmail();
    this.validatePassword();

    if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value)
    .subscribe( () => {
        this.userService.getUser(username)
        .subscribe(res => {
          // open wizard
         if ( res == null) {
          this.alertService.error('Cannot find user with username: ' + username);
         } else {
          this.router.navigateByUrl('/basic/' + res.Id);
         }
        });
      },

      error => {
          this.alertService.error(error);
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
