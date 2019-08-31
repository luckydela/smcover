import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-dashbdtable1',
  templateUrl: './dashbdtable1.component.html',
  styleUrls: ['./dashbdtable1.component.css']
})
export class Dashbdtable1Component implements OnInit {

  userdata;
  agents:any =[];
  searchdata;

  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit() {

    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getAgents(this.userdata.email, this.userdata.role).subscribe(data=>{
       this.agents = data;
       this.searchdata = this.agents;
       //console.log(data)
  });

}

}
