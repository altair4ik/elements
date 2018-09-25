import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomCheckboxGroupComponent} from '../custom-checkbox-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomCheckboxGroupComponent],
  declarations: [CustomCheckboxGroupComponent]
})
export class CustomCheckboxGroupModule { }
