//Dependencies
	import React from "react";

//Components
	import Header from "./Header"
	import Footer from "./Footer"

class Layout extends React.Component{
	constructor(){
		//Solo en el constructor se definen estados
		super();
		this.state = {name: "Zebitas"}
	}

	render(){
		//No se recomienda porque no tienen llaves.
		setTimeout(()=>{
				this.setState({name: "Alejandra"})
			}, 2000);
		return (
			
			//REACT solo va a cambiar si uno de los componentes cambió, de resto, ni tocará el DOM
			<div>		

				<Header name={this.state.name} />
				<h1>It's ALIVE</h1><br/>
				<Footer />
			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;