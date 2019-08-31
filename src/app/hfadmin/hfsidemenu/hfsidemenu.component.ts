import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service'

@Component({
  selector: 'app-hfsidemenu',
  templateUrl: './hfsidemenu.component.html',
  styleUrls: ['./hfsidemenu.component.css']
})
export class HfsidemenuComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }


  maindasbd(){
    this.router.navigate(['hfadmin/hfdsbd']);
  }

userprofile(){
  this.router.navigate(['hfadmin/hfprofile']);

}

customermod(){
this.router.navigate(['hfadmin/hfcustomers']);
}

custransact(){
  this.router.navigate(['hfadmin/hftransact']);

}

managersmod(){
  this.router.navigate(['hfadmin/managers']);
}

notification(){
  this.router.navigate(['hfadmin/notifyport']);
}

supportmail(){
  this.router.navigate(['hfadmin/support']);
}

Addnewvehicle(){
  this.router.navigate(['hfadmin/addnewvehicle']);
}

addstickerid(){
  this.router.navigate(['hfadmin/addstickercustomer']);
}

}
