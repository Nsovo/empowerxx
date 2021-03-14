import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-faq',
  templateUrl: './employer-faq.component.html',
  styleUrls: ['./employer-faq.component.scss']
})
export class EmployerFaqComponent implements OnInit {
  public isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
