import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {
  userdata;
  transactions:any = [];
  searchdata;


  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
    this.service.getTransaction(this.userdata.email, this.userdata.role==="manager").subscribe(data=>{
      this.transactions = data;
      this.searchdata = this.transactions;

  });

  }

  search (query: string){
    this.searchdata = (query) ?this.transactions.filter( data => data.transaction_id.toLowerCase().includes(query.toLowerCase()) || data.invoice_no.toLowerCase().includes(query.toLowerCase()) || data.client_id.toLowerCase().includes(query.toLowerCase()) || data.transaction_type.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.transactions;
  }

}
