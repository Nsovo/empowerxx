import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  public year: string;
  constructor() { }

  public ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }

}
