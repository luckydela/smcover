import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js'
import {ServiceService} from '../../service/service.service';
import { ChartService } from '../../service/chart.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-hfdashbd',
  templateUrl: './hfdashbd.component.html',
  styleUrls: ['./hfdashbd.component.css']
})
export class HfdashbdComponent implements OnInit {

  charts:any;
  ud = JSON.parse(localStorage.getItem('userdata')); //get users email


  total:any;
  transact:any;
  pending:any;

  loaderror:any=''


  loading:boolean = false;
  topperformstartdate:any;
  topperformenddate:any;

  periodchart:any=[];
  

  constructor( public router:Router, private service: ServiceService, public chartservice: ChartService) { }

  ngOnInit() {


    this.loading = true
    this.service.getAnaytics(this.ud.email, this.ud.role).subscribe(data=>{
      this.loading = false
      //this.total = parseFloat(data['total'][0]['total'].replace(/,/g,''));
      //this.transact= data['transaction count'][0]['total']
      this.total = parseFloat(data['total transactions'][0]['totalAmount'].replace(/,/g,''));
      this.transact= data['total transactions'][0]['totalCount'];
      this.pending = data['total pending'][0]['pending'];


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





  ngAfterViewInit(){
    
    this.service.getweeklyAnaytics(this.ud.email).subscribe(data => {
      let labels = [],counts=[],amounts=[]; //declare empty arrays to accet labels, counts and amounts of the graph
      this.loading = false
        //loop through returned data and retrieve the agent_ids as labels, totalCount as counts data and totalAmount as amount data
        data['Weekly top performing agents '].forEach(element => {
          labels.push(element.agent_id);
          counts.push(element.totalCount);
          amounts.push(parseFloat(element.totalAmount.replace(/,/g,'')));
        });
       
      this.charts = this.chartservice.perfomanceChart(labels,amounts,'performance');     

});
}

generatetopagraphformByDate(){
  if (this.topperformstartdate === undefined || this.topperformenddate === undefined) {

    swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date or End Date was not selected.',footer: 'Please, make the necessary changes and try again.'});
  } else if(this.topperformstartdate > this.topperformenddate) { 

    swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date is more than End Date.',footer: 'Please, make the necessary changes and try again.'});
  } else {

    this.loading = true;
    this.service.gettransactionPeriod({email:this.ud.email,minDate:this.topperformstartdate,maxDate:this.topperformenddate})
      .subscribe(data => {
        this.loading = false;
        let labels = [],counts=[],amounts=[];
        data['Weekly top performing agents '].forEach(element => {
          labels.push(element.agent_id);
          counts.push(element.totalCount);
          amounts.push(parseFloat(element.totalAmount.replace(/,/g,'')));
        });
      
        this.charts = this.chartservice.perfomanceChart(labels,amounts,'performance');

        this.topperformenddate = ''
        this.topperformstartdate = ''

      },error => {
        this.loading = false;
        swal.fire({ type: 'error',title: 'Oops...',text: error.message,footer: 'Please, make the necessary changes and try again.'});
      })
    
  }
  
}


perfomanceDetails(){

  let minDate = new Date(this.topperformstartdate)
  let maxDate = new Date(this.topperformenddate)

  let days = (maxDate.getTime()-minDate.getTime())/(1000 * 3600 * 24)


  if (days === 7 || days === 30 ) {
    if (this.topperformstartdate === undefined || this.topperformenddate === undefined) {
      swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date or End Date was not selected.',footer: 'Please, make the necessary changes and try again.'});
    } else if(this.topperformstartdate > this.topperformenddate) { 
      swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date is more than End Date.',footer: 'Please, make the necessary changes and try again.'});
    } else {
      this.loading = true;
      this.service.gettransactionDetails({email:this.ud.email,minDate:this.topperformstartdate,maxDate:this.topperformenddate,duration:days.toString(), role:this.ud.role})
        .subscribe(data => {
          this.loading = false;
          this.periodchart = data['responseData'];
          let labels = [],counts=[],amounts=[];
          data['responseData'].forEach(element => {
            labels.push(element.date);
            amounts.push(parseFloat(element.total.replace(/,/g,'')));
          });
        
          this.charts = this.chartservice.perfomanceChart(labels,amounts,'details');
  
          this.topperformenddate = ''
          this.topperformstartdate = ''
  
        },error => {
          this.loading = false;
          swal.fire({ type: 'error',title: 'Oops...',text: error.message,footer: 'Please, make the necessary changes and try again.'});
        })
    }
  } else {
    return  swal.fire({ type: 'error',title: 'Oops...',text: 'Interval Should be 7 or 30 days',footer: 'Please, make the necessary changes and try again.'});
  }
  
  
  

  
  
}








}
