import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomRadiobuttonGroupComponent} from '../custom-radiobutton-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CustomRadiobuttonGroupComponent],
  declarations: [CustomRadiobuttonGroupComponent]
})
export class CustomRadiobuttonGroupModule { }
