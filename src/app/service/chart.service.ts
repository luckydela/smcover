import { Injectable } from '@angular/core';
import {Chart} from 'chart.js'

@Injectable()
export class ChartService {


  constructor(){}

  perfomanceChart(labels, amounts,canvasid){
    console.log(canvasid);
    
      return new Chart(canvasid, {
        type: 'line',
        data: {
          labels: labels, // your labels array
          datasets: [
            {
              data: amounts, // your data array
              borderColor: '#00AEFF',
              fill: false
            },
            {
              data: canvasid, // your data array
              borderColor: '#00AEFF',
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
  }

}





