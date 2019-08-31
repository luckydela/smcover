import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl, Form } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  mainadminmessage: FormGroup;
  constructor( public router: Router, public service: ServiceService, public formBuilder: FormBuilder) { 

    this.mainadminmessage = this.formBuilder.group({
      title: new FormControl('',[Validators.required]),
      message: new FormControl('', [Validators.required]),
      channel: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required])
 
    })
  }

  ngOnInit() {
  }

  sendmessage(){
    console.log(this.mainadminmessage);
    
  }

}
