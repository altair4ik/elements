import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  items = [
    {title: 'one', value: '1'},
    {title: 'two', value: '2'},
    {title: 'three', value: '3'},
    {title: 'four', value: '4'}
  ];

  ngOnInit(): void {
    this.form = new FormGroup({
      'dropdown': new FormControl(null),
      'multipleSelect': new FormControl(null),
      'checkboxGroup': new FormControl(null)
    });
  }

  submit(): void {
    console.log('dropdown_value', 'form', this.form.get('dropdown').value);
    console.log('multipleSelect_value', 'form', this.form.get('multipleSelect').value);
    console.log('checkboxGroup_value', 'form', this.form.get('checkboxGroup').value);
  }
}
