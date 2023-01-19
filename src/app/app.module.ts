import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPopupComponent } from './product-popup/product-popup.component';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';  
@NgModule({
  declarations: [
    AppComponent,
    ProductPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
