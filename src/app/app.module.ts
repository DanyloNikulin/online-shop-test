import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { EditModalboxComponent } from './cart/edit-modalbox/edit-modalbox.component';
import { OrderSummaryComponent } from './cart/order-summary/order-summary.component';
import { Page404Component } from './page404/page404.component';
import { CartAdvertisementComponent } from './cart/cart-advertisement/cart-advertisement.component';
import { CartHelpComponent } from './cart/cart-help/cart-help.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    EditModalboxComponent,
    OrderSummaryComponent,
    Page404Component,
    CartAdvertisementComponent,
    CartHelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
