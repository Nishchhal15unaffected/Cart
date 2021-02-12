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
	render(){
		const {products}=this.state;
		return(
			<div className="Cart">
				{products.map((product)=>{
					return (<CartItem
					 name="laptop" 
					 product={product} 
					 key={product.id} />)
				})}
			</div>	
			)
	}
}
export default Cart;