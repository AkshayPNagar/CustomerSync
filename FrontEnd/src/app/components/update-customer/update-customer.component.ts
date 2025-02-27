import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  standalone: false,
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {
phone: any='';
constructor(private router:Router){}

update()
{
  if(this.phone){
  this.router.navigate(["/edit-data/", this.phone])
}else {
  alert('Please enter a phone number!');
}
} 


}
