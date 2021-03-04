import React from 'react'
// import Cart from './Cart'
const CartItem =(props)=>{
	
		const {Price,name,qnt,img}=props.product;
		return(
			<div>
				<div >
				<img src={img} alt="product img" />
				</div>
				<div>
				<div>{name}</div>
				<div>{Price}</div>
				<div>{qnt}</div>
				</div>
				<div className="cart-item-action">
				<button id="btn" 
				onClick={()=>props.onIncreaseQuant(props.product)}>
				Increase
				</button>
				<button id="btn" 
				onClick={()=>props.ondecreaseQuant(props.product)}>
				Dicrease
				</button>
				<button onClick={()=> props.ondeleteProduct(props.product.id)}>
				Delete
				</button>
				</div>
			</div>
			)
		
}
export default CartItem;