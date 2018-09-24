import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomDropdownComponent} from '../custom-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomDropdownComponent
  ],
  declarations: [CustomDropdownComponent]
})
export class CustomDropdownModule {
}
