import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcpDashboardComponent } from './acp-dashboard/acp-dashboard.component';
import { AcpLoginComponent } from './acp-login/acp-login.component';
import { AcpAccountComponent } from './acp-account/acp-account.component';
import { AcpDbDefaultComponent } from './acp-dashboard/acp-db-default/acp-db-default.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: AcpLoginComponent },
  { path: 'account', component: AcpAccountComponent },
  {
    path: 'dashboard', 
    component: AcpDashboardComponent,
    children: [
      { path: '', component: AcpDbDefaultComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
