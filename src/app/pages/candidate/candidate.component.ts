import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    console.log('candidate status', this.isLoggedIn);
  }

  public job(): void{
    this.router.navigateByUrl('register/Candidate');
  }

}
