//Dependencies
	import React from "react";
	import {Link} from 'react-router-dom'; //Mejor usar esto a <a>, ayuda a vincular

class Links extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (			
			//REACT solo va a cambiar si uno de los componentes cambió, de resto, ni tocará el DOM
			<div>	

				<Link to="/Archives"><button class="btn btn-success">Archives</button></Link>
				<Link to="/Settings" class="btn btn-danger">Settings</Link>
				<Link to="/" class="btn">Home</Link>
				<Link to="/Featured" class="btn">Featured</Link>

			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Links;