import { FormData } from './../../shared/interface/form-data';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formData: FormData[];
  form: FormGroup;
  submitted: boolean;
  defaultValue: string = '1231231';

  constructor() { }

  ngOnInit() {
    const formGroup = {};

    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl('');
    });

    this.form = new FormGroup(formGroup);
  }

  submitForm() {
    this.submitted = true;
    console.log(this.form.value);
  }

  clickInput($event) {
    // alert('sdf');
    console.log('your rating is');
    console.log($event);
  }
}
