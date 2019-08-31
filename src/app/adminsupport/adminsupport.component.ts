import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-adminsupport',
  templateUrl: './adminsupport.component.html',
  styleUrls: ['./adminsupport.component.css']
})
export class AdminsupportComponent implements OnInit {


  adminsupport: FormGroup;
  constructor(public router: Router, public service: ServiceService, public formBuilder: FormBuilder ) {
   this.adminsupport = this.formBuilder.group({
     title: new FormControl('', [Validators.required]),
     message: new FormControl('', [Validators.required])
   })
   }

  ngOnInit() {
  }

}
