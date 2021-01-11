import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer-service.service';
import { ICustomer } from '../../models/icust';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer:ICustomer = {
    id:null,
    firstName: null,
    lastName: null,
    email: null,
    phNo: null,
    password: null,
    authorized: null,
    walletAmount: null,
    dob: null,
    address: null,
    gender: null,
  };
  requiredCustomer : string;
  constructor(private customerservice: CustomerServiceService, private router: ActivatedRoute, private rrouter:Router) { }

  getCustomerProfile(id:number) {

    
    console.log("\n");
    console.log("inside get customer profile info td=" + id);
    this.customerservice.getCustomerByIdService(id).subscribe((data) => {
      this.requiredCustomer = JSON.stringify(data);
      console.log("data is"+ data);
      console.log("data is"+ this.requiredCustomer);
      console.log("name is"+data.FirstName);
      this.customer.id = data.Id;
      this.customer.firstName = data.FirstName;
      this.customer.lastName = data.LastName;
      this.customer.email = data.Email;
      this.customer.phNo = data.PhNo;
      this.customer.password = data.Password;
      this.customer.authorized = data.Authorised;
      this.customer.walletAmount = data.WalletAmount;
      this.customer.dob = data.Dob;
      this.customer.address = data.Address;
      this.customer.gender = data.Gender;
      console.log("name is"+this.customer.id);
    },
      error => {
        alert(error.error.Message);
      }
    )

  }
  ngOnInit(): void {
    
    const id = Number(this.router.snapshot.paramMap.get("id"));
    if(id==0){
      alert("Please Sign-up to create your profile!");
      this.rrouter.navigate(['/signup']);
    }else{
      //console.log(id);
      this.getCustomerProfile(id);
    }
    
  }

}
