import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-faq',
  templateUrl: './candidate-faq.component.html',
  styleUrls: ['./candidate-faq.component.scss']
})
export class CandidateFaqComponent implements OnInit {
  public isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
