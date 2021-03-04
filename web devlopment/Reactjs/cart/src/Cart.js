import React from 'react';
import CartItem from './CartItem';


const Cart = (props)=> {

		const {products}=props;
		return(
			<div className="Cart">
		
				{products.map((product)=>{
					return (<CartItem 
					 product={product} 
					 key={product.id}
					 onIncreaseQuant={props.onIncreaseQuant}
					 ondecreaseQuant={props.ondecreaseQuant} 
					 ondeleteProduct={props.ondeleteProduct}/>)
				})}

    			
			</div>	
			)
}
export default Cart;