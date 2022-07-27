import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrderItem } from './order-item';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	public products: OrderItem[] = [];
	qtyOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	constructor(public cartService: CartService) { }

	ngOnInit(): void {
		this.cartService.getProducts()
			.subscribe(res => {
				this.products = res;
			}
		)
	}
	onQuantityChange(quantitySrt: string, product: OrderItem) {
		product.quantity = Number(quantitySrt);
		this.cartService.editCartItem(product);
	}
	getTotalSum(id: number) {
		return this.cartService.getTotalOfItemById(id);;
	}
	removeItem(item: OrderItem) {
		this.cartService.removeCartItem(item);
	}
	editItem(product: OrderItem) {
		this.cartService.openDialog(product);
	}

}
