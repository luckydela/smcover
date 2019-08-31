import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  private httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Origin', '*')
  .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
  .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

private options = {
  headers: this.httpHeaders
};

LocalDomain = 'https://vanguard-api.herokuapp.com';
//LocalDomain= ' https://9949c24d.ngrok.io/vanguard/api';
baseURL = this.LocalDomain;

  resetForm: FormGroup;
  email: any
  response: any;

  reset = {

    email: '',
    reset_token: '',
    newpin: '',
    confirmPIN: ''
   // confirmPassword: ''
}
postToken = {
    email:'',
    reset_token:''

}

login = {

  password: ''

}



hide = true;


  constructor(public http: HttpClient, private route: ActivatedRoute, private router: Router,public formBuilder: FormBuilder, public service: ServiceService) {

    this.resetForm = this.formBuilder.group({
      newPIN:new FormControl('',[Validators.required]),
      confirmPIN:new FormControl('',[Validators.required]),
     
    })


   }
 //URL PARAMETERS
 getEmail:string;
 getToken:string;


  ngOnInit() {



    try{

      this.route.paramMap.subscribe(
        params => {
            this.getEmail = params.get('email');
            this.getToken = params.get('token');
  
            // console.log("TOKEN :: "+ this.getToken);
            // console.log("EMAIL :: "+ this.getEmail);
  
        }
  
      );

    }catch(e){
      console.log(e)
    }


    console.log("start")
    //CHECK VALIDITY OF TOKEN FOR CLIENT
    this.validateToken();

   
}

isFieldValid(field: string) {
  return !this.resetForm.get(field).valid && this.resetForm.get(field).touched;
}

displayFieldCss(field: string) {
  return {
    'has-error': this.isFieldValid(field),
    'has-feedback': this.isFieldValid(field)
  };
}




onSubmit() {
  swal.showLoading()
  

  if (this.resetForm.valid) {

    this.reset.email=this.getEmail
    this.reset.reset_token = this.getToken
    this.reset.confirmPIN=this.resetForm.controls.confirmPIN.value
    this.reset.newpin= this.resetForm.controls.newPIN.value
    console.log(this.reset.newpin)
    console.log(this.reset.confirmPIN)
    // this.reset.password_login=this.form.value.password
    // this.reset.confirmPassword=this.form.value.confirmPassword

if (this.reset.newpin!= this.reset.confirmPIN)
{
  swal.hideLoading()

swal.fire({
  title: "Error",
  text: "Password mismatch!",
  width: '250px',
  heightAuto: true,
  animation:true,

  showCancelButton: false,
  showConfirmButton:true
});
}
else
{
//   swal("Success!", 'Passwords match', "success");
// }
delete this.reset.confirmPIN


 // console.log( group.controls.password.value)

  //this.spinner.show();

   console.log(this.reset);

      var data=JSON.stringify(this.reset)
      this.http.post(this.baseURL+'/agents/confirm_reset_pin', this.reset, this.options).subscribe(res => {

      this.response = res;
      console.log(this.response);

    if (this.response.responseCode == '000') {
      //this.spinner.hide();

      //swal("Success", 'Proceed to Login with your new password');
      swal.fire({
        title: "Reset successful",
        text:  "PIN changed successfully.",
        width: '250px',
        heightAuto: true,
        animation:true,
        showCancelButton: false,
        showConfirmButton:true
    });
    swal.hideLoading()

      this.router.navigate(['reset-success']);

    }
    else if (this.response.responseCode == 'R01') {
     
     // this.spinner.hide();
      //swal("Expired!", 'Reset-link expired. Request for a new reset link');
    //   swal.fire({
    //     title: "Expired!",
    //     text:  "Reset-link expired. Request for a new reset link",
    //     width: '250px',
    //     heightAuto: true,
    //     animation:true,
    //     showCancelButton: false,
    //     showConfirmButton:true
    // });
   
    this.router.navigate(['expired-link']);
    // this.router.navigate(['/reset']);

    }
    else {
      swal.hideLoading()

    //  this.spinner.hide();
      //swal("Error!", 'Check your Internet Connection', "error");
      swal.fire({
        title: "Error!",
        text:  "Check your Internet connection",
        width: '250px',
        heightAuto: true,
        animation:true,
        showCancelButton: false,
        showConfirmButton:true
    });
      
     
    }

  })

}

}
else {
  this.validateAllFormFields(this.resetForm);
 // console.log('form error');
}


}
validateAllFormFields(formGroup: FormGroup) {
Object.keys(formGroup.controls).forEach(field => {
 // console.log(field);
  const control = formGroup.get(field);
  if (control instanceof FormControl) {
    control.markAsTouched({ onlySelf: true });
  } else if (control instanceof FormGroup) {
    this.validateAllFormFields(control);
  }
});
}

validateToken(){
//this.spinner.show();

this.postToken.email = this.getEmail;
this.postToken.reset_token  = this.getToken;

console.log("token  email ::: "+ this.postToken.email);
console.log("token reset  ::: "+ this.postToken.reset_token);

var data=JSON.stringify(this.postToken)
      this.http.post(this.baseURL+'/agents/validate_app_user_reset_token', this.postToken, this.options).subscribe(res => {

      this.response = res;
      console.log("RESPONSE ::: "+JSON.stringify(res));

    if (this.response.responseCode == '000') {
     // this.spinner.hide();

      //swal("Success", 'VALID TOKEN', "success");
      //this.router.navigate(['/log-in']);

    }
    else if (this.response.responseCode == 'R01') {
     
     // this.spinner.hide();
     // this.router.navigate(['/expired-link'])
      this.router.navigate(['expired-link']);
      //swal("Error!", 'Oops!...Looks like this reset link is no longer valid or expired', "error");
    }
    else {
     
      // this.spinner.hide();
      // swal("Error!", 'Check your Internet Connection', "error");
     
    }

    //  alert(this.response.responseMessage);



  })
}

}
