import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcpMenubarComponent } from './acp-menubar/acp-menubar.component';
import { AcpGeneralInfoComponent } from './acp-general-info/acp-general-info.component';
import { AcpDynamicSubmenuComponent } from './acp-dynamic-submenu/acp-dynamic-submenu.component';
import { AcpDetailedInfoComponent } from './acp-detailed-info/acp-detailed-info.component';

@NgModule({
   declarations: [
      AppComponent,
      AcpMenubarComponent,
      AcpGeneralInfoComponent,
      AcpDynamicSubmenuComponent,
      AcpDetailedInfoComponent
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
