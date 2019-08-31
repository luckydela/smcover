import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  Addvehicle:boolean=false;
  addvehiclebutton: boolean=true;

  
  addvehicleform: FormGroup;
  constructor(public formBuilder: FormBuilder, public service: ServiceService, public router: Router ) { 
    this.addvehicleform = this.formBuilder.group({
      vmake:new FormControl('',[Validators.required]),
      vmodel:new FormControl('',[Validators.required]),
      
    })
  }

  ngOnInit() {
  }

  addVehicle(){
    this.Addvehicle=true;
    this.addvehiclebutton=false;
    if (this.addvehicleform.valid) {
      swal.showLoading()
      this.service.addagent(this.addvehicleform.value)
      .subscribe(response => {
        swal.hideLoading()
        if (response['responseCode'] === '000') {
          this.addvehicleform = this.formBuilder.group({
            firstName:new FormControl('',[Validators.required]),
            lastName:new FormControl('',[Validators.required]),
           
          })
          swal.fire("Success",response['responseMessage'], "success");
        } else {
          swal.fire({
            title: 'Oops...',
            text: response['responseMessage'],
            footer: ''
          });
        }
        
      }, error => {
        swal.fire({
          title: 'Oops...',
          text: error,
          footer: ''
        });
        swal.hideLoading()
      })
    } else {
      swal.fire({
        title: 'Oops...',
        text: 'Please fill all form fields',
        footer: ''
      });
    }
    
  }

}


