import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  userdata;
  falseAuth:boolean = true;
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'))

  }

  userprofile(){
    this.router.navigate(['/profile'])
  }

  addagentmod(){
    this.router.navigate(['/addagent']);
  }

  Settings(){
    this.router.navigate(['/profile'])
  }

  logout(){  
    window.localStorage.clear();
    this.router.navigate(['']);
}


}
