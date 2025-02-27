import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-remove-customer',
  standalone: false,
  templateUrl: './remove-customer.component.html',
  styleUrl: './remove-customer.component.css'
})
export class RemoveCustomerComponent {
remove!: FormGroup;

constructor(private service:CustomerService, private ar: ActivatedRoute, private fb:FormBuilder, private dialog:MatDialog){}
removeId:any
removeData:any

ngOnInit()
{
    this.removeId=this.ar.snapshot.paramMap.get("phone")
    
        this.remove= this.fb.group({
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
  this.removeData=this.service.getCustomerByID(this.removeId).subscribe((result:any)=>
  {
     this.remove.patchValue(result);
  })
}

removeCustomer() {

    // this.service.deleteCustomer(this.removeId).subscribe((res:any)=>{
    //   console.log(res);

      
    //   alert("Deleted Sucessfully")
      
    // })

    const dialogRef = this.dialog.open(ConfirmDialogComponent,{panelClass: 'custom-dialog-container'});
      
        // Wait for the user's response
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            // User confirmed, proceed with deletion
            this.service.deleteCustomer(this.removeId).subscribe(
              (res: any) => {
                console.log(res);
                alert("Deleted Successfully");
                window.location.reload();
              },
              (error) => {
                console.error("Error deleting customer:", error);
                alert("Failed to delete customer.");
              }
            );
          }
        });
}

}
