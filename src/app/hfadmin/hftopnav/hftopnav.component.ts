import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-hftopnav',
  templateUrl: './hftopnav.component.html',
  styleUrls: ['./hftopnav.component.css']
})
export class HftopnavComponent implements OnInit {

  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit() {
  }

  addmanagermod(){
this.router.navigate(['hfadmin/hfaddmanagers'])
  }

}
