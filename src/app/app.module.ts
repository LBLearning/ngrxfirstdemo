import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomerModule } from '../customer/customer.module';
//import { customerReducer } from '../customer/reducers/customer.reducer';

@NgModule({
  imports: [
    BrowserModule,
    //StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forRoot({}),
    FormsModule,
    CustomerModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
