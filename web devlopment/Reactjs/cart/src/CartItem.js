import React from 'react'
// import Cart from './Cart'
class CartItem extends React.Component{
	
	 
	render(){
		const {price,name,qnt}=this.props.product;
		return(
			<div className="cart-item">
				<div className="left-block">
				</div>
				<div className="right-block">
				<div style={{fontSize:25}}>{name}</div>
				<div style={{color:'#777'}}>{price}</div>
				<div style={{color:'#777'}}>{qnt}</div>
				</div>
				<div className="cart-item-action">
				<button id="btn" 
				onClick={()=>this.props.onIncreaseQuant(this.props.product)}>
				Increase
				</button>
				<button id="btn" 
				onClick={()=>this.props.ondecreaseQuant(this.props.product)}>
				Dicrease
				</button>
				<button onClick={()=> this.props.ondeleteProduct(this.props.product.id)}>
				Delete
				</button>
				</div>
			</div>
			)
	}
}
export default CartItem;