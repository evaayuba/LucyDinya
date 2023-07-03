import { Component, Inject, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

  export class UpdateComponent implements OnInit{
    customer: Customer = new Customer();
  
    cust_id !: number;
  
    constructor(@Inject(CustomerService) private customerService: CustomerService,
      private route: ActivatedRoute,
      private router: Router
     ){ }
  
  
  
    ngOnInit(): void {
      this.cust_id = this.route.snapshot.params['cust_id']
      this.customerService.getCustomerById(this.cust_id).subscribe((data: Customer) =>
        {
          this.customer = data;
        },
        ( error: any) => console.log(error)
        );
               
    }
    onSubmit(){
     this.customerService.updateCustomer(this.cust_id, this.customer).subscribe((data: any) => {
      this.goToCustomerList();
     }
      ,(error: any) => console.log(error)
     );
    }
    
    goToCustomerList(){
      this.router.navigate(['/customer-list']);
   }
  
  }
