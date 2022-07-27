export class OrderItem {
	id:number
	name: string
	style: string
	sku: string
	color: string
	size : string
	price: number
	imageUrl: string
	quantity: number
    constructor(
		id:number,
		name: string, 
		style: string,
		sku: string,
		color: string,
		size : string,
		price: number = 0,
		imageUrl: string,
		)
	{
		this.id = id;
		this.name= name;
		this.style= style;
		this.sku= sku;
		this.color= color;
		this.size= size;
		this.price= price;
		this.imageUrl= imageUrl;
		this.quantity= 1;
    }
}