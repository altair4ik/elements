import {Component, forwardRef, Input, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MultipleSelectItem} from './interfaces/multiple-select-item';

@Component({
  selector: 'app-custom-multiple-select',
  templateUrl: './custom-multiple-select.component.html',
  styleUrls: ['./custom-multiple-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomMultipleSelectComponent),
    multi: true,
  }]
})
export class CustomMultipleSelectComponent implements ControlValueAccessor {
  @ViewChild('select') select;
  @Input() options: MultipleSelectItem[] = [];
  selectedItems: MultipleSelectItem[] = [];

  optionSelect(option: MultipleSelectItem) {
    console.log(this.select.nativeElement.selectedOptions);
    this.writeValue(option.value);
    this.onTouched();
  }

  writeValue(value: string): void {
    const selectedEl = this.options.find(el => el.value === value);
    if (selectedEl) {
      this.selectedItems.push(selectedEl);
      this.onChange(this.selectedItems);
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
