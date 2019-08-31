import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  userdata;
  agents:any = [];
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


search (query: string){
  this.searchdata = (query) ?this.agents.filter( data => data.id.toLowerCase().includes(query.toLowerCase()) ||data.firstName.toLowerCase().includes(query.toLowerCase()) || data.lastName.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.agents;
}


}
