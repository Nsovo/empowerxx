import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  public isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public hire(): void{
    this.router.navigateByUrl('register/Employer');
  }

}
