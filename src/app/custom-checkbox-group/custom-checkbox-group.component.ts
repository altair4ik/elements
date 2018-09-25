import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CheckboxGroupItem} from './interfaces/checkbox-group-item';
import {CheckboxesState} from './interfaces/checkboxes-state';

@Component({
  selector: 'app-custom-checkbox-group',
  templateUrl: './custom-checkbox-group.component.html',
  styleUrls: ['./custom-checkbox-group.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCheckboxGroupComponent),
    multi: true,
  }]
})
export class CustomCheckboxGroupComponent implements ControlValueAccessor, OnInit {
  @Input() items: CheckboxGroupItem[] = [];
  checkboxesState: CheckboxesState[] = [];

  ngOnInit(): void {
    this.items.forEach((item) => {
      this.checkboxesState.push({id: item.value, state: false});
    });
  }

  onCheckChange(state: boolean, val: string) {
    this.checkboxesState.find((el: CheckboxesState) => {
      if (el.id === val) {
        el.state = state;
      }
      return false;
    });
    this.writeValue(this.checkboxesState);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onChange: any = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onTouched: any = () => {};

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(states: CheckboxesState[]): void {
      this.onChange(states);
  }

}
