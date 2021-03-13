import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'We believe in the untapped potential of women';
  public isLoggedIn = false;
  constructor(private router: Router) { }

  public ngOnInit(): void {
    console.log('logged status', this.isLoggedIn);
  }

  public open(type: string): void {
    this.router.navigateByUrl('/register/' + type);

  }

}
