import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcpLoginComponent } from './acp-login/acp-login.component';
import { AcpDashboardComponent } from './acp-dashboard/acp-dashboard.component';
import { AcpDbDefaultComponent } from './acp-dashboard/acp-db-default/acp-db-default.component';
import { AcpAccountComponent } from './acp-account/acp-account.component';

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
      FormsModule,
      SuiModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
