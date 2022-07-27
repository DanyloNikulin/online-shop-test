import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  public granTotal : number = 0
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }
  getGrandTotal(){
    this.cartService.getGrandTotalPrice()
  }

}
