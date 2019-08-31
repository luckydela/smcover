import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {ServiceService} from '../service/service.service';



@Component({
  selector: 'app-quotetbl',
  templateUrl: './quotetbl.component.html',
  styleUrls: ['./quotetbl.component.css']
})
export class QuotetblComponent implements OnInit {
  userdata;
  quotes:any = [];
  color:any=''
  status;//declared a status value which wasnt part of the codes
  searchdata;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))
    this.service.getquote(this.userdata.email, this.userdata.role).subscribe(data=>{
      this.quotes = data;
      this.searchdata = this.quotes;
      

  })
  }


  approveordecline(invoice,status){

    this.service.quoteprove(invoice,status).subscribe(data => {
      var index = this.quotes.findIndex(x => x.invoice_no == invoice.invoice_no);
      this.quotes[index].status = status
      //console.log(invoice,status);

      if(data['responseCode'] === '000'){
        
        
        
       // swal.fire("Status","Activated Successfully", "success");
        this.status = 'success';

      } else {
       // swal.fire("Status","Is Declined ", "success");
        this.status = 'danger'
      }
    })
  }


  search (query: string){
    this.searchdata = (query) ?this.quotes.filter( data => data.invoice_no.toLowerCase().includes(query.toLowerCase())|| data.client_fullName.toLowerCase().includes(query.toLowerCase()) || data.insurance_type.toLowerCase().includes(query.toLowerCase()) || data.rate.toLowerCase().includes(query.toLowerCase())|| data.status.toUpperCase().includes(query.toUpperCase())) : this.quotes;
  }

}
