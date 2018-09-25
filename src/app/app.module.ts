import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RatingInputComponent} from './rating-input/rating-input.component';
import {CustomDropdownModule} from './custom-dropdown/modules/custom-dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMultipleSelectModule} from './custom-multiple-select/modules/custom-multiple-select.module';
import {CustomCheckboxGroupModule} from './custom-checkbox-group/modules/custom-checkbox-group.module';
import {CustomRadiobuttonGroupModule} from './custom-radiobutton-group/modules/custom-radiobutton-group.module';

@NgModule({
  declarations: [
    AppComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomDropdownModule,
    CustomMultipleSelectModule,
    CustomCheckboxGroupModule,
    CustomRadiobuttonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
