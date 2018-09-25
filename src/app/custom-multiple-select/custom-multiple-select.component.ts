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

  optionSelect() {
    this.writeValue(this.getValue(this.select.nativeElement.selectedOptions));
    this.onTouched();
  }

  getValue(selectedOptions: HTMLElement[]): string[] {
    const values: string[] = [];
    for (const key in selectedOptions) {
      if (selectedOptions.hasOwnProperty(key)) {
        values.push(selectedOptions[key].getAttribute('value'));
      }
    }
    return values;
  }

  writeValue(values: string[]): void {
    this.onChange(values);
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
