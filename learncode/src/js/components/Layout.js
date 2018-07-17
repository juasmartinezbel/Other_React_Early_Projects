//Dependencies
	import React from "react";

//Components
	import Header from "./Header"
	import Footer from "./Footer"

class Layout extends React.Component{
	render(){

		//Se puede hacer una lista de elementos/componentes también
		var list =[
			<h2>el</h2>,
			<h2>el2</h2>,
			<h2>el3</h2>
		];
		//No se recomienda porque no tienen llaves.
		return (
			<div>
				<Header />
				<br/>
					{list}
				<br/>
				<h1>It's ALIVE</h1><br/>
				<Footer />
			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;