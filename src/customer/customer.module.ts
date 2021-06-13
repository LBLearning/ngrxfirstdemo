import { NgModule } from '@angular/core';
import { CustViewComponent } from './customerview/customerview.component';
import { CustAddComponent } from './customeradd/customeradd.component';
import { CommonModule } from '@angular/common';
import { customerFeatureKey } from './reducers/customer.reducer';
import { reducer } from './reducers/customer.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(customerFeatureKey, reducer)],
  declarations: [CustViewComponent, CustAddComponent],
  exports: [CustViewComponent, CustAddComponent]
})
export class CustomerModule {}
