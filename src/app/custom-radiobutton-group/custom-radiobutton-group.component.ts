import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {RadiobuttonItem} from './interfaces/radiobutton-item';

@Component({
  selector: 'app-custom-radiobutton-group',
  templateUrl: './custom-radiobutton-group.component.html',
  styleUrls: ['./custom-radiobutton-group.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomRadiobuttonGroupComponent),
    multi: true,
  }]
})
export class CustomRadiobuttonGroupComponent implements ControlValueAccessor {
  @Input() items: RadiobuttonItem[] = [];
  selectItem: RadiobuttonItem;

  pickItem(val: string) {
    this.writeValue(val);
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

  writeValue(val: string): void {
    const selectedEl = this.items.find(el => el.value === val);
    if (selectedEl) {
      this.selectItem = selectedEl;
      this.onChange(this.selectItem.value);
    }
  }
}
