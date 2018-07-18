//Dependencies
	import React from "react";
	import Links from "./Links"
	import * as qs from 'query-string'; 
		//Librería para convertir string de busqueda a mapa
		//Instalar  npm install query-string

class Layout extends React.Component{
	constructor(){
		super();
	}

	render(){
		// Cambiará si uno escribe /Settings?algo=cosa
		// 
			console.log(this.props)	;
			const {search} = this.props.location
			console.log(search)
			const parsed = qs.parse(location.search);
			console.log(parsed);
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