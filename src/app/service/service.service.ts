import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //dummy_url: string ="http://localhost:8080/starlife/login";
    Base_Url: any ="http://192.168.2.116:8080";
   live_Url: any= "https://vanguard-api.herokuapp.com";
   notifyBucket: any = "/topics/com.ecl.smartcoveragent";
   notifyUrl: any = 'https://fcm.googleapis.com/fcm/send';
   //live_Url:any="https://9949c24d.ngrok.io";
  




  isLoggedInStatus:any;


   private httpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private smshttpHeaders = new HttpHeaders()
   .set('Content-Type', 'application/json')
   .set('Access-Control-Allow-Origin', '*')
   .set('Authorization', 'key=AIzaSyBlTd4JoSMbrs8W5eeRESJ5_TMFIHrgnBw')

   .set("Acces-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
   .set("Acces-Control-Allow-Headers", "Origin, Content-Type, Cookies");

   private options = {
    headers: this.httpHeaders
   };

   private smsoptions = {
    headers: this.smshttpHeaders
   };




  constructor( private http: HttpClient) {

    /*var connectionMessage = "internet connection available";
var noConnectionMessage = "No internet connection.";
window.onload = checkInternetConnection;
function checkInternetConnection() {
  var isOnLine = navigator.onLine;
   if (isOnLine) {

    swal.fire("Internet Sucess",connectionMessage, "success");

   } else {
    swal.fire({ type: 'error',
    title: 'Oops...',
    text: noConnectionMessage,
    footer: '<a href>Can you please check your internet?</a>'});
   }
}*/
  
    
   }

   get isLoggedIn(){
    this.isLoggedInStatus = localStorage.isLoggedInStatus
    if(!this.isLoggedInStatus){
      return false
    } else {
      return true
    }
  }




  getLogin(test){
    return this.http.post(this.live_Url+'/vanguard/api/manager_login', test, this.options);
  }

  quoteprove(invoice, status){
    invoice.status = status;
    return this.http.post(this.live_Url+'/vanguard/api/managers/approve_quote',JSON.stringify({invoice_no:invoice.invoice_no,status:invoice.status}), this.options)
  }

  getquote(email, role){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_quotes',JSON.stringify({email: email, role: role}), this.options);
   }

   getAgents(email, role){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_agents',JSON.stringify({email: email, role:role}), this.options);//agents
   }


   getCustomers(email, role){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_clients',JSON.stringify({email: email, role:role}), this.options);//customers
   }

   getTransaction(email,role){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_transactions',JSON.stringify({email: email, role:role}), this.options);//Transactions
   }

   getAnaytics(email, role){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_transactions_analytics',JSON.stringify({email:email, role:role}), this.options);//analytics
  }

  addagent(agent){
   return this.http.post(this.live_Url+'/vanguard/api/manager_create_agent',JSON.stringify(agent), this.options);//analytics
  }

  getNewclient(email){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_newClients',JSON.stringify({email:email}), this.options);//New clients module
  }






  /* getweeklyAnaytics(email){
      return this.http.post(this.live_Url+'/vanguard/api/managers/get_transactions_Period', JSON.stringify({email:email }), this.options);
  }*/

  getweeklyAnaytics(email){
    return this.http.post(this.live_Url+'/vanguard/api/manager/get_transactions_Agents_weekly', JSON.stringify({email:email }), this.options);
  }





 /* gettransactionPeriod(data){
    return this.http.post(' https://9949c24d.ngrok.io/vanguard/api/managers/get_transactions_Period_Details', JSON.stringify(data), this.options);
  }*/
  



  gettransactionPeriod(data){
    return this.http.post(this.live_Url+'/vanguard/api/managers/get_transactions_Period', JSON.stringify(data), this.options);

  }

  getStickers(email){
return this.http.post(this.live_Url+'/vanguard/api/managers/get_stickers', JSON.stringify({email:email}), this.options);
  }

  

  addStickers(data:any){
    return this.http.post(this.live_Url+'/vanguard/api/managers/add_stickers',JSON.stringify(data), this.options)
  }

  gettransactionDetails(data){
    return this.http.post(this.live_Url+ '/vanguard/api/managers/get_transactions_Period_Details',data, this.options)
  }

  getTopPerformingAgent(data:any){
    return this.http.post(this.live_Url+ '/vanguard/api/managers/get_topPerformingAgents',data, this.options)
  }

  sendNotification(data:any){
    return this.http.post(this.notifyUrl,data,this.smsoptions)
  }
  

/*---------------------- Customer section from main adminstrator level---------------------------*/


  /*gethrlogin(hftest){
    return this.http.post(this.live_Url+'',hftest, this.options);
  }*/

}





