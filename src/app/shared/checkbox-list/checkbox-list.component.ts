import { Component, Input, forwardRef, ElementRef,OnDestroy } from '@angular/core';
import { ControlValueAccessor, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormArray, FormControl } from '@angular/forms';
import {takeWhile} from 'rxjs/operators'

@Component({
  selector: 'checkbox-list',
  template: `
  <div [formGroup]="formArray">
  <div *ngFor="let check of formArray.controls;let i=index">
   <mat-checkbox [formControl]="check">{{key?_data[i][text]:_data[i]}}</mat-checkbox>
</div>
</div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxListComponent),
      multi: true
    }
  ],
  
})
export class CheckboxListComponent implements ControlValueAccessor, OnDestroy{

  formArray: FormArray = new FormArray([])
  isValue: boolean = false;
  text: string;
  key: string;
  alive:boolean=true;
  _data

  @Input() set data(value) {
    this._data = value;
    const keys = typeof (value[0]) == 'object' ? this.getOrderedKeys(value[0]) : null
    if (keys) {
      this.key = keys[0]
      this.text = keys[1]
    }
  }

  onChange;
  onTouched;

  writeValue(value: any[] | any): void {
    this.formArray = new FormArray(this._data.map((x, index) =>
      new FormControl(value.indexOf(this.key ? this._data[index][this.key] : this._data[index]) >= 0)))

    this.formArray.valueChanges.pipe(takeWhile(()=>this.alive))
         .subscribe((res) => {
      this.onTouched()
      const response = res.indexOf(true) >= 0 ?
        this._data.filter((x, index) => this.formArray.value[index]) :
        null

      this.onChange(response == null ? null : this.key ? response.map(x => x[this.key]) : response)

    })
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formArray.controls.forEach(c => {
      if (isDisabled)
        c.disable();
      else
        c.enable();
    })
  }
  ngOnDestroy()
  {
    this.alive=false;
  }
  private getOrderedKeys(obj): string[] {
    return JSON.stringify(obj)
      .replace(/[&\/\\#+()$~%.'"*?<>{}]/g, '')
      .split(',')
      .map(x => x.split(':')[0]);
  }

}
