import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertBasic } from './Components/alert-basic.component';
import { NgbdTableBasic } from './Components/table-basic.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbdAlertBasic,
    NgbdTableBasic
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
