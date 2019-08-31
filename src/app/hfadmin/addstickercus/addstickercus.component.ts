import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-addstickercus',
  templateUrl: './addstickercus.component.html',
  styleUrls: ['./addstickercus.component.css']
})
export class AddstickercusComponent implements OnInit {

  Addvehicle:boolean=false;
  addvehiclebutton: boolean=true;

  constructor( public router: Router, public service: ServiceService) { }

  ngOnInit() {
  }

}
