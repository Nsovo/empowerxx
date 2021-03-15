import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  constructor(private spinner: NgxSpinnerService) { }

  public show(message = '') {
    this.spinner.show(undefined, { fullScreen: true });
  }

  public hide() {
    this.spinner.hide();
  }
}
