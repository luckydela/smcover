import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-notifyme',
  templateUrl: './notifyme.component.html',
  styleUrls: ['./notifyme.component.css']
})
export class NotifymeComponent implements OnInit {

  sendmessageform: FormGroup;

  constructor(public router: Router, public service: ServiceService, public formBuilder: FormBuilder) {

    this.sendmessageform = this.formBuilder.group({
      title: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required]),
      channel: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required])


    })
   }

  ngOnInit() {
  }


  sendmessage(){
    console.log(this.sendmessageform);
    
  }


}
