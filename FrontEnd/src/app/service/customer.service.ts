import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const basicUrl=["http://localhost:8080/api"]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

   addCustomer(customer:any) :Observable<any>
   {
      return this.http.post(basicUrl+"/add-customer", customer);

   }

   getCustomer():Observable<any>
   {
    return this.http.get(basicUrl+"/get-customer");
   }

   getCustomerByID(phone:any):Observable<any>
   {
    return this.http.get(`${basicUrl}/get-by-id/${phone}`);
   }

   updateCustomer(phone:any, customer:any):Observable<any>
   {
    return this.http.put(basicUrl+"/update-customer/"+phone,customer);
   }

   deleteCustomer(phone:any)
   {
      return this.http.delete(basicUrl+"/remove-customer/"+phone)
   }
}
