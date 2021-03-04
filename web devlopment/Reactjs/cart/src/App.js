import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/app';
 class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			products:[],
			loading:true
		}
 	this.db=firebase.firestore();
	}

	increaseQuant=(product)=>{
		const {products}=this.state;
		const index=products.indexOf(product);
		// products[index].qnt+=1;
	 // 	this.setState({
	 // 		products:products
	 // 	})
		const docRef=this.db.collection('1').doc(products[index].id);
		docRef
		.update({
			qnt:products[index].qnt+1
		}).then(()=>{
			console.log('succeesss fully update ');
		}).catch((e)=>{
			console.log('error: ',e);
		})
	}
	
	decreaseQuant=(product)=>{
	 	const {products}=this.state;
	 	const index = products.indexOf(product);
	 	// products[index].qnt -=1;
	 	// if(products[index].qnt>0){
	 	// this.setState({
	 	// 	products:products
	 	// })
	 	if(products[index].qnt==0){
	 		return;
	 	}
	 	const decRef=this.db.collection('1').doc(products[index].id);
	 	decRef
	 	.update({
	 		qnt:products[index].qnt-1,
	 	}).then(()=>{
	 		console.log('succeesss fully decreaseQuant');
	 	}).catch((e)=>{
	 		console.log('error: ',e);
	 	})
	 }
	
	deleteProduct=(id)=>{
		const {products}=this.state;
		// const updatedProducts=products.filter((item)=> item.id!==id)
		// this.setState({
		// 	products:updatedProducts
		// })
		const docRef=this.db.collection('1').doc(id);
		docRef
		.delete()
		.then(()=>{
			console.log('succeesss fully delete');
		})
		.catch((e)=>{
			console.log('error: ',e);
		})
	}
	
	countItem=()=>{
		const {products}=this.state;
		let count=0;
		products.forEach((item)=>{
			count +=item.qnt
		})
		return count;
	}

	totalPrice=()=>{
		const {products}=this.state;
		let count=0;
		products.forEach((item)=>{
			count +=item.qnt * item.Price;
		})
		return count;
	}

	componentDidMount(){
		// firebase
		// 	.firestore()
		// 	.collection('1')
		// 	.get()
		// 	.then((snapshot)=>{
		// 		console.log(snapshot);
		// 		const products=snapshot.docs.map(doc=>{
		// 			console.log(doc.data);
		// 			const data=doc.data();
		// 			data['id']=doc.id;
		// 			return data;
		// 		})

		// 		this.setState({
		// 			products:products,
		// 			loading:false
		// 		})
		// 	})
			this.db
			.collection('1')
			.onSnapshot((snapshot)=>{
				console.log(snapshot);
				const products=snapshot.docs.map(doc=>{
					console.log(doc.data());
					const data=doc.data();
					data['id']=doc.id;
					return data;
				})

				this.setState({
					products:products,
					loading:false
				})
			})

	}

	addProduct=()=>{
		this.db
		.collection('1')
		.add({
			img:'',
			Price:999,
			qnt:1,
			title:'Mobile'
		}).then((docRef)=>{
			console.log(docRef);
		}).catch((err)=>{
			console.log(err);
		})
	}

render(){
	const {products,loading}=this.state;
  return (
    <div>
    <Navbar count={this.countItem()}/>
    {loading && <h1>Loading...</h1>}
    <Cart
    				
					 products={products}
					 onIncreaseQuant={this.increaseQuant}
					 ondecreaseQuant={this.decreaseQuant} 
					 ondeleteProduct={this.deleteProduct} />
	<div>Total : {this.totalPrice()}</div>
    </div>
    
  );
}
}
export default App;

     // <button onClick={this.addProduct}>Add Product</button>