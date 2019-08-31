import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agenttotal',
  templateUrl: './agenttotal.component.html',
  styleUrls: ['./agenttotal.component.css']
})
export class AgenttotalComponent implements OnInit {
  agents:any;
  total:any;
  transact:any;
  pending:any;

  loading:boolean = false
  ud = JSON.parse(localStorage.getItem('userdata')) //get users email
  loaderror:any = ''

  agentindtotal:boolean=true;

  agentstotal:any;
 
 

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.loading = true
    this.service.getAnaytics(this.ud.email, this.ud.role).subscribe(data=>{
      this.loading = false
      //this.total = parseFloat(data['total'][0]['total'].replace(/,/g,''));
      //this.transact= data['transaction count'][0]['total']
//this.total = parseFloat(data['total for agents'][0]['totalAmount'].replace(/,/g,''));
//this.transact= data['total for agents'][0]['totalCount']

this.total = parseFloat(data['total transactions'][0]['totalAmount'].replace(/,/g,''));
this.transact= data['total transactions'][0]['totalCount'];
this.pending = data['total pending'][0]['pending'];
//this.pending = data['total pending'][0]['pending']



    
    

    }, error => {
      this.loading = false
      this.loaderror = 'failed to fetch data. Reload'
      swal.fire({
        title: 'Oops...',
        text: error.name,
        footer: ''
      });
    });   
   


    }

}
