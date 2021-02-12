import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
	constructor(props){
		super(props);
		this.state={
			products:[
			{
			price:99,
			name:'Phone',
			qnt:5,
			img:'',
			id:1
				},
			{
			price:99,
			name:'Watch',
			qnt:7,
			img:'',
			id:2
				},
			{
			price:99,
			name:'laptop',
			qnt:8,
			img:'',
			id:3
				},
			]
		}
	}
	increaseQuant=(product)=>{
		const {products}=this.state;
		const index=products.indexOf(product);
		products[index].qnt+=1;
	 	this.setState({
	 		products:products
	 	})
	}

	 decreaseQuant=(product)=>{
	 	const {products}=this.state;
	 	const index = products.indexOf(product);
	 	products[index].qnt -=1;
	 	if(products[index].qnt>0){
	 	this.setState({
	 		products:products
	 	})
	 }
	}
	deleteProduct=(id)=>{
		const {products}=this.state;
		const updatedProducts=products.filter((item)=> item.id!==id)
		this.setState({
			products:updatedProducts
		})
	}
	render(){
		const {products}=this.state;
		return(
			<div className="Cart">
				{products.map((product)=>{
					return (<CartItem
					 name="laptop" 
					 product={product} 
					 key={product.id}
					 onIncreaseQuant={this.increaseQuant}
					 ondecreaseQuant={this.decreaseQuant} 
					 ondeleteProduct={this.deleteProduct}/>)
				})}
			</div>	
			)
	}
}
export default Cart;