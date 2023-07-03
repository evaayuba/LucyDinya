import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CustomerComponent } from './customer/customer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerListComponent } from './customer-list/customer-list.component';
// import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CustomerUpdatesComponent } from './customer-updates/customer-updates.component';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
// import { CustomerUpdateComponent } from './customer-update/customer-update.component';
// import { CustomerUpdatesComponent } from './customer-updates/customer-updates.component';
// import { CustomerViewComponent } from './customer-view/customer-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavigationComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerOrderComponent,
    CustomerPaymentComponent,
    UpdateComponent,
    HomeComponent,
    ViewComponent,
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

