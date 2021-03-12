import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;
  public wizardComplete = false;
  // public candidate: Candidate = new Candidate;
  constructor( private router: Router,
               private route: ActivatedRoute) {
      // currentUserService.getLoggedInState
      // .subscribe(state =>
      //   {
      //     debugger;
      //     return this.changeLoginStatus(state)
      //   });
    }

  public ngOnInit(): void {
    console.log('isLoggedIn' , this.isLoggedIn);
    // this.isLoggedIn = this.authService.isAuthenticated();
    // this.route.params.subscribe(user => {
    //   if(user.Id != undefined){
    //     this.getCandidate(user.id );

    //   }
    // });

  }

  public changeLoginStatus(state: any): void {
    // debugger;
    //    this.isLoggedIn = state["isLoggedIn"];
    //    this.wizardComplete = state["isWizardComplete"];
  }

  public logout(): void {
    // this.authService.logout();
    // window.addEventListener('storage', (event) => {
    //   if (event.storageArea == localStorage) {
    //     let token = localStorage.getItem('currentUserToken');
    //     if(token == undefined) { // you can update this as per your key
    //         // DO LOGOUT FROM THIS TAB AS WELL
    //       debugger;
    //       this.router.navigateByUrl('/home/');
    //     }
    //   }
    // }, false);
  }

  private getCandidate(id: any): void  {
    // this.userService.getCandidateById(id)
    //     .subscribe((res: Candidate) => {
    //       this.candidate = res;
    //       this.candidate.WizardComplete = this.wizardComplete
    //     },
    //     error => {
    //        // this.alertService.error(error);
    //     });
  }

}
