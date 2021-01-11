import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer-service.service';
import { sendLoginCust } from '../../models/icust';
import { LoggedInCust} from './../../models/icust';
import {HeaderComponent} from './../../header/header.component';
import { Router } from '@angular/router';
import { Session } from 'protractor';
import { EventEmitterService } from './../../services/event-emitter.service';    
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sendlogincust: sendLoginCust = {
    email: null,
    password: null
  }
  // id:number;
  constructor(private customerservice: CustomerServiceService, private router: Router, private eventEmitterService: EventEmitterService) { 
    
  }
  loginCustomer() {
    this.customerservice.loginCustomerService(this.sendlogincust.email, this.sendlogincust.password).subscribe((data : LoggedInCust) => {
      alert("Login Successfull");
      // console.log(typeof(data));
      // console.log(data.Id);
      // console.log(data.PhNo);
      // console.log(data.FirstName);
      // this.id = data.Id;
      
     
      sessionStorage.setItem('item',JSON.stringify(data));
      sessionStorage.setItem('currentUserId', data.Id.toString());
      sessionStorage.setItem('currentUser', data.FirstName);
      sessionStorage.setItem('walletAmount', data.WalletAmount.toString());
      console.log(sessionStorage.getItem('item'));
      console.log(sessionStorage.getItem('currentUserId'));
      console.log(sessionStorage.getItem('currentUser'));
      console.log(sessionStorage.getItem('walletAmount'));
      this.loginComponentFunction();
     
      this.router.navigate(['/']);
    }, error => {
      alert(error.error.Message);
    }
    )
  }
  getloginDetais(sendlogincust: sendLoginCust) {
    this.sendlogincust = sendlogincust;
    this.loginCustomer();
  }

  loginComponentFunction(){    
    this.eventEmitterService.onLoginComponentButtonClick(); 
     
  }
  ngOnInit(): void {
  }

}
