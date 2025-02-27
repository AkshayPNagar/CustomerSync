import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-edit-data',
  standalone: false,
  templateUrl: './edit-data.component.html',
  styleUrl: './edit-data.component.css'
})
export class EditDataComponent {

add!: FormGroup;
 
  constructor(private ar:ActivatedRoute, private service:CustomerService, private fb:FormBuilder, private route:Router){ }

phoneData:any;
phoneId:any;

  ngOnInit()
  {
    this.phoneId=this.ar.snapshot.paramMap.get("phone")

    this.add= this.fb.group({
      name:[null, [Validators.required]],
      lastName:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]],
      address:[null, [Validators.required]],
      inlineRadioOptions:[null, [Validators.required]]
       
    })
    this.getCustomerById()
  }

  getCustomerById()
  {
   this.phoneData= this.service.getCustomerByID(this.phoneId ).subscribe((res)=>{
      console.log(res);
    this.add.patchValue(res);
    })

  }

  updateCustomer() {
    this.service.updateCustomer(this.phoneId,this.add.value).subscribe((res:any)=>{
      console.log(res)
      alert("Updated Succefully")
    setTimeout(() => {
      this.route.navigate(["viewCustomer"])
    }, 1000);
    

    })
    }
    
  
}
