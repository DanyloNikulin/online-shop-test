import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { Page404Component } from './page404/page404.component';
Page404Component
const routes: Routes = [
  {path: '', redirectTo: 'cart', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: '**', component: Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
