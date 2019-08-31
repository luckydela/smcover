import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';

declare var $:any;
declare var Chartist;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  falseAuth:boolean = true;

 
  total:any;
  transact:any;
  pending:any;

  loading:boolean = false
  ud = JSON.parse(localStorage.getItem('userdata')) //get users email
  loaderror:any = ''

  

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.loading = true
    this.service.getAnaytics(this.ud.email, this.ud.role).subscribe(data=>{
      this.loading = false
      //this.total = parseFloat(data['total'][0]['total'].replace(/,/g,''));
      //this.transact= data['transaction count'][0]['total']
this.total = parseFloat(data['total transactions'][0]['totalAmount'].replace(/,/g,''));
this.transact= data['total transactions'][0]['totalCount'];
this.pending = data['total pending'][0]['pending'];

console.log(this.total, this.transact);

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
  
        //loop through returned data and retrieve the agent_ids as labels, totalCount as counts data and totalAmount as amount data
        data['Weekly top performing agents '].forEach(element => {
          labels.push(element.agent_id);
          counts.push(element.totalCount);
          amounts.push(parseFloat(element.totalAmount.replace(/,/g,'')));
        });
        
        // finally call graph function to draw 
        this.drawCharts(labels,counts, amounts)
      })
    }





  drawCharts(labels, counts, amounts){

    if ($('#daily').length != 0 || $('#completedTasksChart').length != 0 || $('#websiteViewsChart').length != 0) {
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      var dataDailySalesChart = {
        labels: labels,
        series: [
          counts
        ]
      };

      var optionsDailySalesChart = {
        lineSmooth: window['Chartist'].Interpolation.cardinal({
          tension: 0
        }),
        low: Math.min(...counts),
        high: Math.max(...counts), // creative tim: we recommend you to set the high sa the biggest value + something for a better look
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
      }

      var dailySalesChart = new Chartist.Line('#daily', dataDailySalesChart, optionsDailySalesChart);

      window['md'].startAnimationForLineChart(dailySalesChart);



      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      var dataCompletedTasksChart = {
        labels: labels,
        series: [
          amounts
        ]
      };

      var optionsCompletedTasksChart = {
        lineSmooth: window['Chartist'].Interpolation.cardinal({
          tension: 0
        }),
        low: Math.min(...amounts),
        high: Math.max(...amounts), 
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }

      var completedTasksChart = new Chartist.Line('#completed', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      window['md'].startAnimationForLineChart(completedTasksChart);


      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      // var dataWebsiteViewsChart = {
      //   labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      //   series: [
      //     [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

      //   ]
      // };
      // var optionsWebsiteViewsChart = {
      //   axisX: {
      //     showGrid: false
      //   },
      //   low: 0,
      //   high: 1000,
      //   chartPadding: {
      //     top: 0,
      //     right: 5,
      //     bottom: 0,
      //     left: 0
      //   }
      // };
      // var responsiveOptions = [
      //   ['screen and (max-width: 640px)', {
      //     seriesBarDistance: 5,
      //     axisX: {
      //       labelInterpolationFnc: function(value) {
      //         return value[0];
      //       }
      //     }
      //   }]
      // ];
      // var websiteViewsChart = Chartist.Bar('#website', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      // //start animation for the Emails Subscription Chart
      // window['md'].startAnimationForBarChart(websiteViewsChart);
    }

  }



  Agentsmod(){
    this.router.navigate(['/sidenav/agents'])
  }


  Customermod(){
    this.router.navigate(['/sidenav/customers'])
  }

  




addagentmod(){
  //console.log('success');
  
  this.router.navigate(['/sidenav/dashbd/addagent'])
}





}
