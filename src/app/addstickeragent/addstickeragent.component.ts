import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import swal from 'sweetalert2';


@Component({
  selector: 'app-addstickeragent',
  templateUrl: './addstickeragent.component.html',
  styleUrls: ['./addstickeragent.component.css']
})
export class AddstickeragentComponent implements OnInit {

  assignstickerrange:boolean=false;
  assignrange: boolean=true;

  inddata: any=[];


  agentsticker: any=[];
  userdata;
  searchdata;

  addstickerform:FormGroup;
  constructor(public router: Router, public service: ServiceService, public formbuilder: FormBuilder) {
    this.addstickerform = this.formbuilder.group({
      stsmnm: new FormControl('',[Validators.required]),
      stsmxm: new FormControl('', [Validators.required]),
      agntid: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata')); //get users email
    this.service.getStickers(this.userdata.email).subscribe(data =>{
      console.log(data['responseData']);
      
      this.agentsticker = data['responseData'];

      this.inddata = (data['responseData'][0]);
      //this.searchdata=this.agents;

      //data['responseData'].forEach(element => {
       
      //});

    })


  }




  assignstickerno(){
    this.assignstickerrange=true;
    this.assignrange=false;

    //this.userdata=JSON.parse(localStorage.getItem('userdata'));
    //this.service.getStickers(this.userdata.email).subscribe(data=>{
    
   // });
    




  }

  addsticker(){
    
  }

}
