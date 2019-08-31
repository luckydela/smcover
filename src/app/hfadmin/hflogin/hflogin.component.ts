import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hflogin',
  templateUrl: './hflogin.component.html',
  styleUrls: ['./hflogin.component.css']
})
export class HfloginComponent implements OnInit {
usr={
  email:'',
  password:''
}

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }

  hflogin(){
    swal.showLoading()
    var test = JSON.stringify(this.usr)
  
    //console.log("hvhj");
    //console.log(test);


    
    this.service.getLogin(test).subscribe(data => {

      //console.log(data)
      swal.hideLoading()
         if(data['responseCode'] === '000'){
         // alert("Welcome to Starlife Tracker Administrator!!");
          //SweetAlert2Module("Login", "You are Sucessfully logged In", "success");

          //swal.fire("Login Sucess","You are Sucessfully logged In", "success");
          localStorage.setItem('isLoggedInStatus', JSON.stringify(data['profile'][0]));
          localStorage.setItem('userdata',JSON.stringify(data['profile'][0]));
            //console.log(data);


   // this.spinner.show();

 
            
    this.router.navigate(['hfadmin/hfdsbd']);
         
         } 
         else if(data['responseCode']==='W1012'){
          //this.falseAuth = true; 
         // this.loginreturnData = data['returnData'];
                  // alert("Wrong UserEmail Or Password ");
                  swal.showLoading()
                   swal.fire({ type: 'error',
                   title: 'Oops...',
                   text: 'Wrong User Email Or Password!',
                   footer: '<a href>Why do I have this issue?</a>'});


         }
    });    }

}
