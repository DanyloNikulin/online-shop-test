import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderItem } from '../order-item';

@Component({
	selector: 'app-edit-modalbox',
	templateUrl: './edit-modalbox.component.html',
	styleUrls: ['./edit-modalbox.component.css']
})
export class EditModalboxComponent implements OnInit {
	public productToEdit : OrderItem | undefined
	public products: OrderItem[] = [];

	constructor(private cartService: CartService) {
		this.productToEdit = this.cartService.getProductToEdit();
		this.products = this.cartService.getStockProducts();
	}
	ngOnInit(): void {
	}
	close() {
		this.cartService.closeDialog();
	}
	getColorOptions(size : string | undefined):string[] { 
		const unique = [...this.products];
		if(size == "") {
			return [...new Set(unique.filter(item =>item.name == this.productToEdit?.name).map(item => item.color))];
		}else { 
			return [...new Set(unique.filter(item => item.size == size &&
				item.name == this.productToEdit?.name).map(item => item.color))];
		}
	}
	getSizeOptions():string[] { 
		const unique = [...this.products];
		return [...new Set(unique.filter(item =>item.name == this.productToEdit?.name).map(item => item.size))];
	}
	onColorChange(color:string) {
		if(this.productToEdit != undefined){
			this.productToEdit.color= color;
		}
	}
	onSizeChange(size:string) {
		if(this.productToEdit != undefined){
			this.productToEdit.size= size;
		}
	}
}
