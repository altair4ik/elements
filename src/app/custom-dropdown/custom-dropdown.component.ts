import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DropdownItem} from './interfaces/dropdown-item';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomDropdownComponent),
    multi: true,
  }]
})
export class CustomDropdownComponent implements ControlValueAccessor {
  @Input() items: DropdownItem[] = [];
  @Input() title = 'Dropdown';
  selectItem: DropdownItem;

  itemSelect(item: DropdownItem) {
    this.writeValue(item.value);
    this.onTouched();
  }

  writeValue(value: string): void {
    const selectedEl = this.items.find(el => el.value === value);
    if (selectedEl) {
      this.selectItem = selectedEl;
      this.onChange(this.selectItem.value);
    }
  }

  onChange: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched: any = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
