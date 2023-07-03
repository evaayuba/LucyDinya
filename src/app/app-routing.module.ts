import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'customer',component:CustomerComponent},
  {path: 'home',component:HomeComponent},
  {path:'registration',component:RegistrationComponent},
  // {path:'nav',component:NavigationComponent},
 {path:'customer-list',component:CustomerListComponent},
 {path:'customer-details/:cust_id',component:CustomerDetailsComponent},
 {path:'update/:cust_id',component:UpdateComponent},
 {path:'view',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
