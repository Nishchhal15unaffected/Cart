import React from 'react';

 const Navbar=(props)=>{
		return(
				<div className="Navbar">
				<div style={styles.Navicon}>
				<span style={styles.Cart}>Cart<span>{props.count}</span></span>
				</div>
				</div>
			)

}
const styles={
	Navicon:{
		height:"70px",
		widht:"100%",
		backgroundColor:"blue"
	},
	Cart:{
		float:"right"
	}
} 

export default Navbar