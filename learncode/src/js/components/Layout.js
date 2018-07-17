//Dependencies
	import React from "react";

//Components
	import Header from "./Header"
	import Footer from "./Footer"

class Layout extends React.Component{
	render(){
		//No se recomienda porque no tienen llaves.
		return (
			<div>
				<Header />
				<h1>It's ALIVE</h1><br/>
				<Footer />
			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;