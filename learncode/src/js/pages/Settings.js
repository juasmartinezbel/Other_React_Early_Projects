//Dependencies
	import React from "react";
//Components
	import Links from "./Links"
class Layout extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (			
			//REACT solo va a cambiar si uno de los componentes cambió, de resto, ni tocará el DOM
			<div>		
				<h1>Settings</h1>
				<Links/>
			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;