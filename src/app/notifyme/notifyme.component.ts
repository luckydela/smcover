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
      activity: new FormControl('', [Validators.required])
    })
   }

  ngOnInit() {
  }


  sendmessage(){ 
    if (!this.sendmessageform.valid) return swal.fire({type: 'error',title: 'Ooops ...',text: 'Some form items are item', footer:'Please, make the necessary changes and try again'})   
    let message = {
      to : this.service.notifyBucket,
      content_available: true,
      notification: { 
        title: this.sendmessageform.value.title,
        body: this.sendmessageform.value.message 
      }, 
      data: {
        activity:this.sendmessageform.value.activity
      }
    }

    swal.showLoading()
    this.service.sendNotification(message).subscribe(data => {

      if (data['message_id']) {
        swal.fire({ type: 'success',title: 'Success',text: 'Notification has been sent successfully'});
      
      
        this.sendmessageform = this.formBuilder.group({
          title: new FormControl('',[Validators.required]),
          message: new FormControl('', [Validators.required]),
          activity: new FormControl('', [Validators.required])
        })
      } else {
        swal.fire({ type: 'error',title: 'Oops...',text: 'Notification sending failed.', footer: 'Please try again.'});
      }
    }, error => {
      swal.hideLoading()
      swal.fire({ type: 'error',title: 'Oops...',text: error.message, footer: 'Please, make the necessary changes and try again.'});
    })
    
  }


}
