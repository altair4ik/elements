import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RatingInputComponent} from './rating-input/rating-input.component';
import {CustomDropdownModule} from './custom-dropdown/modules/custom-dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMultipleSelectModule} from './custom-multiple-select/modules/custom-multiple-select.module';
import { CustomCheckboxGroupComponent } from './custom-checkbox-group/custom-checkbox-group.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingInputComponent,
    CustomCheckboxGroupComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomDropdownModule,
    CustomMultipleSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
