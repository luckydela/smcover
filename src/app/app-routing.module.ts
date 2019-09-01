import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AgentsComponent } from './agents/agents.component';
import { CustomersComponent } from './customers/customers.component';
import { QuotetblComponent } from './quotetbl/quotetbl.component';
import { AddagentsComponent } from './addagents/addagents.component';
import { TransactComponent } from './transact/transact.component';
import {AuthGuard} from './service/authguard';
import { NotifymeComponent } from './notifyme/notifyme.component';
import {AddstickeragentComponent} from './addstickeragent/addstickeragent.component';
import { ResetComponent } from './reset/reset.component';



import { HfloginComponent } from './hfadmin/hflogin/hflogin.component';
import { HfdashbdComponent } from './hfadmin/hfdashbd/hfdashbd.component';
import { HfprofileComponent } from './hfadmin/hfprofile/hfprofile.component';
import { ManagertblComponent } from './hfadmin/managertbl/managertbl.component';
import { HfaddmanagerComponent } from './hfadmin/hfaddmanager/hfaddmanager.component';
import { HfcustomersComponent } from './hfadmin/hfcustomers/hfcustomers.component';
import { HftransactComponent } from './hfadmin/hftransact/hftransact.component';
import { HfsidemenuComponent } from './hfadmin/hfsidemenu/hfsidemenu.component';
import {HftopnavComponent} from   './hfadmin/hftopnav/hftopnav.component';
import { NotifyComponent } from './hfadmin/notify/notify.component';
import { SupportComponent } from './hfadmin/support/support.component';
import { AddvehicleComponent } from './hfadmin/addvehicle/addvehicle.component';
import {AddstickercusComponent} from './hfadmin/addstickercus/addstickercus.component';
import { AdminsupportComponent } from './adminsupport/adminsupport.component';
import { TranschartComponent } from './transchart/transchart.component';
import { ExpiredLinkComponent } from './expired-link/expired-link.component';
import { ResetSuccessAppComponent } from './reset-success-app/reset-success-app.component';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'',
   component: SidenavComponent,
   canActivateChild: [AuthGuard],
   children:[
    {path:'dashbd',component:DashboardComponent},

    {path:'profile', component:ProfileComponent},

    {path:'agents', component: AgentsComponent},

    {path:'customers', component: CustomersComponent},

    {path:'transact', component: TransactComponent},

    {path:'quotes', component: QuotetblComponent},

    {path:'addagent', component: AddagentsComponent},

    {path: 'notifyparty', component: NotifymeComponent},

    {path: 'addstickeragent', component: AddstickeragentComponent},

    {path: 'adminsupport', component: AdminsupportComponent},

    {path: 'transchart', component: TranschartComponent},





    {path:'hfdsbd' , component: HfdashbdComponent},
    {path:'hfprofile', component: HfprofileComponent},
    {path:'managers',component:ManagertblComponent},
    {path:'hfaddmanagers', component: HfaddmanagerComponent},
    {path: 'hfcustomers', component: HfcustomersComponent},
    {path:'hftransact', component: HftransactComponent },
    {path: 'notifyport', component: NotifyComponent},
    {path: 'support', component: SupportComponent},
    {path: 'addnewvehicle', component: AddvehicleComponent},
    {path: 'addstickercustomer', component: AddstickercusComponent}, 

    
   ]
  },
  
  {path:'reset', component: ResetComponent},
  {path:'reset/:email/:token', component:ResetComponent },
  {path:'expired-link', component: ExpiredLinkComponent},
  {path:'reset-success', component: ResetSuccessAppComponent},

/*...............Head Office Administrator starts from here................. 
{path:'hfadmin', component: HfloginComponent},
{path:'hfadmin', 
component:HfsidemenuComponent,
canActivateChild: [AuthGuard],
children:[
  {path:'hfdsbd' , component: HfdashbdComponent},
  {path:'hfprofile', component: HfprofileComponent},
  {path:'managers',component:ManagertblComponent},
  {path:'hfaddmanagers', component: HfaddmanagerComponent},
  {path: 'hfcustomers', component: HfcustomersComponent},
  {path:'hftransact', component: HftransactComponent },
  {path: 'notifyport', component: NotifyComponent},
  {path: 'support', component: SupportComponent},
  {path: 'addnewvehicle', component: AddvehicleComponent},
  {path: 'addstickercustomer', component: AddstickercusComponent}
]
}*/



/*..............Head Office Administrator ends  here................... */


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponent=[LoginComponent,  SidenavComponent, DashboardComponent, 
  TopnavComponent, ProfileComponent, CustomersComponent, AgentsComponent, QuotetblComponent,
  TransactComponent,  AddagentsComponent, NotifymeComponent, AddstickeragentComponent,
  AdminsupportComponent, TranschartComponent,

HfloginComponent, HfsidemenuComponent, HfdashbdComponent, HfprofileComponent, ManagertblComponent,
  HfaddmanagerComponent, HfcustomersComponent, HftransactComponent, HftopnavComponent, NotifyComponent,
  SupportComponent, AddvehicleComponent, AddstickercusComponent, ResetComponent,ExpiredLinkComponent,ResetSuccessAppComponent
]
