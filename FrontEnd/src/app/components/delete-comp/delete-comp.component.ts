import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-comp',
  standalone: false,
  templateUrl: './delete-comp.component.html',
  styleUrl: './delete-comp.component.css'
})
export class DeleteCompComponent {

phone: any='';

constructor(private router:Router){}


delete() {
 
  if(this.phone)
  {
    this.router.navigate(["/remove-customer/",this.phone])
  }

  else{
    alert("Enter Valid Mobile Number")
  }

  }
  

}
