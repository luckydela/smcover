import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-dashbdtable2',
  templateUrl: './dashbdtable2.component.html',
  styleUrls: ['./dashbdtable2.component.css']
})
export class Dashbdtable2Component implements OnInit {

  userdata;
  customers:any = [];
  searchdata;

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getCustomers(this.userdata.email, this.userdata.role).subscribe(data=>{
       this.customers = data;
       this.searchdata = this.customers;
       //console.log(data)
  });

}
}
