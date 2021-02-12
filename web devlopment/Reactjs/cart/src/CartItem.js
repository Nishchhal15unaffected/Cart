import React from 'react'
// import Cart from './Cart'
class CartItem extends React.Component{
	
	 increaseQuant=()=>{
	 	this.setState({
	 		qnt:this.state.product.qnt+1
	 	})
	}
	 decreaseQuant=()=>{

	 	if(this.state.qnt>0){
	 	this.setState({
	 		qnt:this.state.product.qnt-1
	 	})
	 }
	}
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
				onClick={this.increaseQuant}>
				Increase
				</button>
				<button id="btn" 
				onClick={this.decreaseQuant}>
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