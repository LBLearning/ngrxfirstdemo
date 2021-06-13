import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Customer } from '../models/customer';
import { CustomerState } from '../reducers/customer.reducer';
import { selectCustomers } from '../selector/customer.selector';

@Component({
  selector: 'cust-view',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustViewComponent {
  customers$: Observable<Customer[]>;

  constructor(private store: Store<CustomerState>) {
    this.customers$ = this.store.pipe(select(selectCustomers));
  }
}
