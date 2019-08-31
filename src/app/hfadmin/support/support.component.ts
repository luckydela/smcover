import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  


}
