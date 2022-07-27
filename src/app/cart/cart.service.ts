import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderItem } from './order-item';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	public cartItemList: OrderItem[] = []
	public productList = new BehaviorSubject<OrderItem[]>([]);
	public showDialog: boolean = false;
	public productToEdit : OrderItem| undefined ;
	public stockOfproducts: OrderItem[] = []
	constructor() {
		this.stockOfproducts.push(
			new OrderItem(
				1,
				"test",
				"fancy",
				"454545645",
				"white",
				"XL",
				50,
				"assets/order-images/hmgoepprod.webp"
			),
			new OrderItem(
				2,
				"test",
				"fancy",
				"454545645",
				"blue",
				"XL",
				50,
				"assets/order-images/hmgoepprod.webp"
			),
			new OrderItem(
				3,
				"test",
				"fancy",
				"454545645",
				"white",
				"X",
				50,
				"assets/order-images/hmgoepprod.webp"
			),
			new OrderItem(
				4,
				"test",
				"good",
				"454545645",
				"white",
				"S",
				70,
				"assets/order-images/hmgoepprod.webp"
			)
		)
		this.setProduct(this.stockOfproducts.slice(1,3));

	}
	getProducts() {
		return this.productList.asObservable();
	}
	getStockProducts() {
		return this.stockOfproducts;
	}
	getProductToEdit(){
		return this.productToEdit;
	}
	setProduct(product: OrderItem[]) {
		this.cartItemList.push(...product);
		this.productList.next(product);
	}
	addtoCart(product: OrderItem) {
		this.cartItemList.push(product);
		this.productList.next(this.cartItemList);
		this.getGrandTotalPrice();
		console.log(this.cartItemList)
	}
	getGrandTotalPrice(): number {
		let grandTotal = 0;
		this.cartItemList.forEach((item) => {
			grandTotal += this.getTotalOfItem(item);
		})
		return grandTotal;
	}
	getTotalOfItemById(id: number) {
		return this.getTotalOfItem(this.cartItemList.find(item => item.id === id));
	}
	getTotalOfItem(item: OrderItem | undefined) {
		let total = 0;
		if (item != undefined) {
			total = item.price * item.quantity;
		}
		return total;
	}
	removeCartItem(product: OrderItem) {
		this.cartItemList.forEach((item: OrderItem, index: any) => {
			if (product.id === item.id) {
				this.cartItemList.splice(index, 1);
			}
		})
		this.productList.next(this.cartItemList);
	}
	editCartItem(product: OrderItem | undefined) {
		if(product == undefined){
			return;
		}
		this.cartItemList.forEach((item: OrderItem, index: any) => {
			if (product.id === item.id) {
				this.cartItemList[index] = product;
				this.productList.next(this.cartItemList);
				return;
			}
		})
	}
	removeAllCart() {
		this.cartItemList = []
		this.productList.next(this.cartItemList);
	}
	openDialog(product: OrderItem) {
		this.productToEdit = Object.assign({}, product);;
		this.showDialog = true;
	}
	closeDialog() {
		this.editCartItem(this.productToEdit);
		this.productToEdit = undefined;
		this.showDialog = false;
		
	}
}
