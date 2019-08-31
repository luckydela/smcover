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


  genstickerform: FormGroup;
  agents:any = [];
  agentid:any = '';
  userdata:any;
  searchdata:any=[];
  generatestickerno:boolean = false;

  constructor(public router: Router, public service: ServiceService, public formBuilder: FormBuilder) {

    this.genstickerform = this.formBuilder.group({
      min:new FormControl('',[Validators.required]),
      max:new FormControl('',[Validators.required])
    })

    this.userdata=JSON.parse(localStorage.getItem('userdata'))
     this.service.getAgents(this.userdata.email, this.userdata.role).subscribe(data=>{
       this.agents = data;
       this.searchdata = this.agents;
    });
  }

  ngOnInit() {

  }

  search (query: string){
    this.searchdata = (query) ?this.agents.filter( data => data.id.toLowerCase().includes(query.toLowerCase()) ||data.firstName.toLowerCase().includes(query.toLowerCase()) || data.lastName.toLowerCase().includes(query.toLowerCase()) || data.email.toUpperCase().includes(query.toUpperCase())) : this.agents;
  }

  generatefn(agent){
    this.generatestickerno = true;
    this.agentid = agent.id;
  }

  cancelfn(){
    this.generatestickerno = false;
    this.agentid = '';
    this.genstickerform = this.formBuilder.group({
      min:new FormControl('',[Validators.required]),
      max:new FormControl('',[Validators.required])
    })
  }

  generateStickers(){
    swal.showLoading()
    if (this.genstickerform.value.min > this.genstickerform.value.max) {
      swal.hideLoading()
      swal.fire({ type: 'error',title: 'Oops...',text: 'The min value '+ this.genstickerform.value.min + ' > than the max value ' + this.genstickerform.value.max,footer: 'Please, make the necessary changes and try again.'});
    } else if(this.genstickerform.valid && (this.genstickerform.value.min < this.genstickerform.value.max)){
      swal.hideLoading()
     


      let stickerdata = {email:this.userdata.email, min_range:this.genstickerform.value.min, max_range: this.genstickerform.value.max, id:this.agentid}
      this.service.addStickers(stickerdata).subscribe(data=>{
 

        if(data['responseCode']==="000"){
          this.generatestickerno = false;
          swal.fire({ type: 'success',title: 'Success',text: data['responseMessage'],});
          this.genstickerform = this.formBuilder.group({
            min:new FormControl('',[Validators.required]),
            max:new FormControl('',[Validators.required])
            
          })

        }else{
          swal.fire({ type: 'error',title: 'Oops...',text: data['responseMessage'], footer: 'Please, make the necessary changes and try again.'});

        }
        

      }, error=>{
        console.log(error);
        
        swal.fire({ type: 'error',title: 'Oops...',text: error.message, footer: 'Please, make the necessary changes and try again.'});

      })

     

    } else{
      swal.fire({ type: 'error',title: 'Oops...',text: 'Something went wrong... ', footer: 'Please, make the necessary changes and try again.'});
    }
  }
}