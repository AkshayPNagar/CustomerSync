import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { DeleteCompComponent } from './components/delete-comp/delete-comp.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'customer', component:AddCustomerComponent},
  {path:'viewCustomer', component:GetAllCustomerComponent},
  {path:'updateCustomer', component:UpdateCustomerComponent},
  {path:'edit-data/:phone', component:EditDataComponent},
  {path:'edit-data', component:EditDataComponent},
  {path:'deleteCustomer', component:DeleteCompComponent},
  {path:'remove-customer/:phone', component:RemoveCustomerComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
