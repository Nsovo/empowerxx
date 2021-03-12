import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'We believe in the untapped potential of women';
  public isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
  }

}
