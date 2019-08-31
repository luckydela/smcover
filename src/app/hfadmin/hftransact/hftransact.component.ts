import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-hftransact',
  templateUrl: './hftransact.component.html',
  styleUrls: ['./hftransact.component.css']
})
export class HftransactComponent implements OnInit {
  userdata;
  transactions:any = [];
  searchdata;


  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
    this.service.getTransaction(this.userdata.email, this.userdata.role==="admin").subscribe(data=>{
      this.transactions = data;
      this.searchdata = this.transactions;

  });

  }

  search (query: string){
    this.searchdata = (query) ?this.transactions.filter( data => data.transaction_id.toLowerCase().includes(query.toLowerCase()) || data.invoice_no.toLowerCase().includes(query.toLowerCase()) || data.client_id.toLowerCase().includes(query.toLowerCase()) || data.transaction_type.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.transactions;
  }

}
