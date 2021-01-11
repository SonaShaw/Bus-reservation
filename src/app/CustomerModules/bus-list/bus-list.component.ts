import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../../services/customer-service.service';
import { ICust } from '../../models/icust';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buslist: ICust[];


  constructor(private customerservice: CustomerServiceService, private router: ActivatedRoute) { }

  getBusInfo(from: string, to: string, traveldate: Date) {

    console.log("\n");
    console.log("inside get Bus info td=" + traveldate);
    this.customerservice.getBusList(from, to, traveldate).subscribe((data: ICust[]) => {
      this.buslist = data;
    },
      error => {
        alert(error.error.Message);
      }
    )

  }

  ngOnInit(): void {
    const from = this.router.snapshot.paramMap.get("from");
    const to = this.router.snapshot.paramMap.get('to');
    const traveldate = new Date(this.router.snapshot.paramMap.get('traveldate'));
    this.getBusInfo(from, to, traveldate);
  }
} 