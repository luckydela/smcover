import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-hfprofile',
  templateUrl: './hfprofile.component.html',
  styleUrls: ['./hfprofile.component.css']
})
export class HfprofileComponent implements OnInit {
userdata;
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
  }

}
