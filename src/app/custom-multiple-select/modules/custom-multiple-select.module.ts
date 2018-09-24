import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMultipleSelectComponent} from '../custom-multiple-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomMultipleSelectComponent
  ],
  declarations: [CustomMultipleSelectComponent]
})
export class CustomMultipleSelectModule { }
