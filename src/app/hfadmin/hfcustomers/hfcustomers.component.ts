import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-hfcustomers',
  templateUrl: './hfcustomers.component.html',
  styleUrls: ['./hfcustomers.component.css']
})
export class HfcustomersComponent implements OnInit {
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


search (query: string){
  this.searchdata = (query) ?this.customers.filter( data => data.client_id.toLowerCase().includes(query.toLowerCase()) || data.last_name.toLowerCase().includes(query.toLowerCase()) || data.date_updated.toLowerCase().includes(query.toLowerCase()) || data.created_by.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.customers;
}
}
