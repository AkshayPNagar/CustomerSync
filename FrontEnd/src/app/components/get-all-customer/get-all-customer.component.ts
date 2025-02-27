import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-get-all-customer',
  standalone: false,
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent {
  id: any;
  phone: any;


  constructor(private service:CustomerService, public router: Router, private ar:ActivatedRoute, private dialog:MatDialog){}

  data:any

  ngOnInit()
  {
    this.data=this.service.getCustomer().subscribe((allData:any)=>{

      console.log(allData)
      this.data=allData
    }

    )

  }
  
  

  update()
  {
      this.router.navigate(['/edit-data'])
  }

  delete(phone: string) {
    // Open confirmation dialog first
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{panelClass: 'custom-dialog-container'});
  
    // Wait for the user's response
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed, proceed with deletion
        this.service.deleteCustomer(phone).subscribe(
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
