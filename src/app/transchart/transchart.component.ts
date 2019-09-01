import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
import {ServiceService} from '../service/service.service';
import { ChartService } from '../service/chart.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-transchart',
  templateUrl: './transchart.component.html',
  styleUrls: ['./transchart.component.css']
})
export class TranschartComponent implements OnInit {
  charts:any;
  ud = JSON.parse(localStorage.getItem('userdata')); //get users email


  loading:boolean = false;
  topperformstartdate:any;
  topperformenddate:any;
  month:any;
  
  constructor(private service: ServiceService,private chartservice: ChartService) {

  }

  ngOnInit() {
    this.loading = true;
  }



  ngAfterViewInit(){
    
    this.service.getweeklyAnaytics(this.ud.email).subscribe(data => {
      let labels = [],counts=[],amounts=[]; //declare empty arrays to accet labels, counts and amounts of the graph
      this.loading = false
      console.log(data);
      
        //loop through returned data and retrieve the agent_ids as labels, totalCount as counts data and totalAmount as amount data
        data['Weekly top performing agents '].forEach(element => {
          labels.push(element.agent_id);
          counts.push(element.totalCount);
          amounts.push(parseFloat(element.totalAmount.replace(/,/g,'')));
        });
      this.month = ''
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

 
    this.service.getTopPerformingAgent({email:this.ud.email,minDate:this.topperformstartdate,maxDate:this.topperformenddate,duration:"months", role:this.ud.role})
      .subscribe(data => {
        this.loading = false;
        if(data['responseCode'] === "000"){
          if (data['responseData'].length === 0) return swal.fire({type:'error',title:'Ooops ...',text:'No records found for the selection'})
            let labels = [],month=[],amounts=[];
            data['responseData'].forEach(element => {
              labels.push(element.agent_id);
              month.push(element.month);
              amounts.push(parseFloat(element.total.replace(/,/g,'')));
            });
            this.month = month[0];
            this.charts = this.chartservice.perfomanceChart(labels,amounts,'performance');
            this.topperformenddate = ''
            this.topperformstartdate = ''
          } else {
            swal.fire({type: 'error',title: 'Ooops...',text: data['responseMessage']});
          }
      },error => {
        this.loading = false;
        swal.fire({ type: 'error',title: 'Oops...',text: error.message,footer: 'Please, make the necessary changes and try again.'});
      })
  }
}
}

