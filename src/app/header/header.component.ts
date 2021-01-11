import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from './../services/event-emitter.service';    
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userName;
  public currentUserId;
  public sessionStorage = sessionStorage;
  //id:number = Number(sessionStorage.getItem('currentUserId'));
  routingPath : string;
  constructor(private eventEmitterService: EventEmitterService ) { 
    sessionStorage.setItem('currentUserId',"0");
    sessionStorage.setItem('currentUser',"Guest");
    sessionStorage.setItem('walletAmount', "0");
    //this.loginOrLogOut();
    
  }

  loginOrLogOut() {
    //console.log("Inside loginOrLogout boolLogin=" + this.boolLogin);
    var login = document.getElementById("login");
    
    var logout = document.getElementById("logout");

    if (sessionStorage.getItem('currentUser') != null) {
      login.style.display = "none";
      logout.style.display = "block";

    }
    else {
      logout.style.display = "none";
      login.style.display= "block";
    }
    console.log("boolLogin=" );
  }

  logOutTheUser(){
    var login = document.getElementById("login");
    var logout = document.getElementById("logout");
    sessionStorage.clear();
    logout.style.display = "none";
    login.style.display= "block";
    sessionStorage.setItem('currentUserId',"0");
    sessionStorage.setItem('currentUser',"Guest");
    sessionStorage.setItem('walletAmount',"0");
    console.log(sessionStorage.getItem('id'));
    console.log(sessionStorage.getItem('currentUser'));
    console.log(sessionStorage.getItem('walletAmount'));

  }

  // findRoutingPath(){
  //   if(sessionStorage.getItem('currentUserId')=="0")
  //     this.routingPath = "['/signup/']";
  //   else
  //     this.routingPath = "['/profile/'"+sessionStorage.getItem('currentUserId')+"]";
  // }

  ngOnInit(): void {
    // this.loginOrLogOut();
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeHeaderComponentFunction.subscribe((name:string) => {    
        this.loginOrLogOut();    
      });    
    }
  }

}
