import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RatingInputComponent} from './rating-input/rating-input.component';
import {CustomDropdownModule} from './custom-dropdown/modules/custom-dropdown.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RatingInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CustomDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
