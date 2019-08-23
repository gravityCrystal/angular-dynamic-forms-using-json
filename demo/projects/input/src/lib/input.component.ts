import { Component, OnInit, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ui-input',
  template: `
  <input #input type='text' [value]='inputValue' [id]='idValue' [class]='classValue' [required]='required' class="classValue" [name]='inputName' [disabled]='inputDisabled' (blur)="clickFunc()"  >
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() inputValue: string = '';
  @Input() inputName: string;
  @Input() modelName: string;
  @Input() idValue: string;
  @Input() classValue: string;
  @Input() required: string;
  @Output() clickHandler: EventEmitter<any> = new EventEmitter<any>();
  @Input() inputDisabled: boolean;
  @ViewChild('input') input: ElementRef
  constructor() { }

  ngOnInit() {
  }
  clickFunc() {
    this.clickHandler.emit(this.inputValue);
  }
  writeValue(value: any): void {
    // every time the form control is
    // being updated from the parent
    this.input.nativeElement.value = value;
  }
  registerOnChange(fn: any): void {
    // when we want to let the parent
    // know that the value of the
    // form control should be updated
    // call `fn` callback

    this.clickFunc = fn;
  }
  registerOnTouched(fn: any): void {
    // when we want to let the parent
    // know that the form control
    // has been touched
    // call `fn` callback
    this.clickFunc = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // when the parent updates the
    // state of the form control
  }
}
