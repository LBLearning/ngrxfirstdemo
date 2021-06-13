import { Component, VERSION } from '@angular/core';
import { addCustomer } from '../actions/customer.actions';
import { Customer } from '../models/customer';
import { CustomerState } from '../reducers/customer.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'cust-add',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustAddComponent {
  constructor(private store: Store<CustomerState>) {}

  addCustomer(customerName: string): void {
    const customer = new Customer();

    customer.name = customerName;

    this.store.dispatch(addCustomer(customer));
  }
}
