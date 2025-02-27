import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  standalone: false,
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})

export class AddCustomerComponent {

add!:FormGroup;
  constructor(private ser:CustomerService, private fb:FormBuilder){}
 
  ngOnInit()
  {
    this.add= this.fb.group({
      name:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      address:[null, [Validators.required]],
      inlineRadioOptions:[null, [Validators.required]]
       
    })
  }

  addCustomer()
  {
    console.log(this.add.value);
    this.ser.addCustomer(this.add.value).subscribe((res:any)=>{
    console.log(res);
      alert("Added SuccesFully")
    
  })
    }
  }
