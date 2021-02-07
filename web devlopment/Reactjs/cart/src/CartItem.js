import React from 'react'

class CartItem extends React.Component{
	constructor(){
		super();
		this.state={
			price:99,
			name:'Phone',
			qnt:2,
			img:''
		}
	}
	render(){
		return(
			<div className="cart-item">
				<div className="left-block">
				</div>
				<div className="right-block">
				<div style={{fontSize:25}}>{this.state.name}</div>
				<div style={{color: '#777'}}>{this.state.price}</div>
				<div style={{color:'#777'}}>{this.state.qnt}</div>
				</div>
				<div className="cart-item-action">
				<button id="btn">
				Increase
				</button>
				<button id="btn">
				Dicrease
				</button>
				<button>
				Delete
				</button>
				</div>
			</div>
			)
	}
}
export default CartItem;