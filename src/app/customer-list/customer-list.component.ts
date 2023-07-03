import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  customers!: Customer[];

  constructor(private customerService: CustomerService,
    private router: Router
    ){}
       
   

  ngOnInit(): void{
      this.getCustomers();
  }
  private getCustomers(){
    this.customerService.getCustomersList().subscribe(
      (customers) => {
           this.customers = customers;
           console.log("data received", this.customers);
    },
    (error)=>{
      console.log("error in retrieving data", error);
    }
    );
  }
customerDetails(cust_id: number){
  this.router.navigate(['customer-details', cust_id])
}

updateCustomer(cust_id: number){
  this.router.navigate(['update', cust_id])
}

deleteCustomer(cust_id: number){
  this.getCustomers();
  this.customerService.deleteCustomer(cust_id).subscribe(data => {
    console.log(data);
    // this.getCustomers();
  })
}
 

}
