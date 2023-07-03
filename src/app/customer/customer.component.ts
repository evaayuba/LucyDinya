import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer:Customer=new Customer(); 

constructor(private customerService: CustomerService,
  private router:Router){}
      
  ngOnInit(): void {
    
  }

  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe( data => {
      console.log(data);
      this.goToCustomerList();
    },
    error =>console.log(error)); 
   }

   goToCustomerList(){
      this.router.navigate(['/customer-list']);
   }

onSubmit(){
console.log(this.customer);
this.saveCustomer();

}
}
    
    


