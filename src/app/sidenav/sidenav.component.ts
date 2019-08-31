import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PRIVILEDGES } from '../service/roles.mockup';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  falseAuth:boolean=false;

  userdata = JSON.parse(localStorage.getItem('userdata'));
  menus:any = [];

  constructor(private router: Router) { 
    this.menus = PRIVILEDGES.filter((menu) => {
      return menu.role === this.userdata.role;
    })  
  }

  ngOnInit() {
   
  }

  maindasbd(){
  this.router.navigate(['/dashbd']);
}
routefn(route:any){
  this.router.navigate([route])
}


quotesmod(){
  this.router.navigate(['/quotes'])
}

notifyAgents(){
this.router.navigate(['/notifyparty'])
}


addagentsticker(){
  this.router.navigate(['/addstickeragent'])
}


transchart(){
  this.router.navigate(['/transchart'])
}

support(){
  this.router.navigate(['/adminsupport']);
}


managersmod(){
  this.router.navigate(['hfadmin/managers']);
}

Addnewvehicle(){
  this.router.navigate(['hfadmin/addnewvehicle']);
}

}







