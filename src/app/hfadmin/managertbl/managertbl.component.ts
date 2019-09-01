import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
//import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'app-managertbl',
  templateUrl: './managertbl.component.html',
  styleUrls: ['./managertbl.component.css']
})
export class ManagertblComponent implements OnInit {
  userdata;
  managerinfo:any=[];


  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {

    this.userdata=JSON.parse(localStorage.getItem('userdata'))
    this.service.getManagers(this.userdata.email).subscribe(data=>{
      this.managerinfo = data;
      //this.searchdata = this.quotes;
      

  })
  }

}
