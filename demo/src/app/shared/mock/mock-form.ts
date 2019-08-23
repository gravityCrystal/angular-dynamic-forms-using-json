import { FormData } from './../interface/form-data';

export const MockForm: FormData[] = [
  {
    controlName: 'Username',
    controlType: 'text',
    valueType: 'text',
    class: 'col-12',
    id: 'username',
    currentValue: 'dummy',
    placeholder: 'Enter username',
    validators: {
      required: true,
      minlength: 5
    }
  },
  {
    controlName: 'Telephone',
    placeholder: 'Enter Phone',
    valueType: 'dummy tel',
    class: 'col-12',
    id: 'tel',
    controlType: 'text',
    currentValue: 'atel',
    validators: {
      required: true,
      minlength: 7,
      maxlength: 10
    }
  }
];
