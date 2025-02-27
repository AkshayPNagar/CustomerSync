import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { GetAllCustomerComponent } from './components/get-all-customer/get-all-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { DeleteCompComponent } from './components/delete-comp/delete-comp.component';
import { RemoveCustomerComponent } from './components/remove-customer/remove-customer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    GetAllCustomerComponent,
    UpdateCustomerComponent,
    HomeComponent,
    EditDataComponent,
    DeleteCompComponent,
    RemoveCustomerComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
