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
    {title: '1', value: '1'},
    {title: '2', value: '2'},
    {title: '3', value: '3'},
    {title: '4', value: '4'}
  ];

  ngOnInit(): void {
    this.form = new FormGroup({
      'dropdown': new FormControl(null),
      'multipleSelect': new FormControl(null),
    });
  }

  submit(): void {
    console.log('dropdown_value', 'form', this.form.get('dropdown').value);
    console.log('multipleSelect_value', 'form', this.form.get('multipleSelect').value);
  }
}
