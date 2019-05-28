import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule }   from '@angular/forms';

import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcpLoginComponent } from './acp-login/acp-login.component';
import { AcpDashboardComponent } from './acp-dashboard/acp-dashboard.component';
import { AcpDbDefaultComponent } from './acp-dashboard/acp-db-default/acp-db-default.component';
import { AcpAccountComponent } from './acp-account/acp-account.component';
import { AcpAuthService } from './acp-auth.service';

@NgModule({
   declarations: [
      AppComponent,
      AcpLoginComponent,
      AcpDashboardComponent,
      AcpDbDefaultComponent,
      AcpAccountComponent
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      SuiModule,
      AppRoutingModule
   ],
   providers: [
      AcpAuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
