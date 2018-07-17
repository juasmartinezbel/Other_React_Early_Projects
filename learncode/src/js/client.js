import React from "react"
import ReactDOM from "react-dom";

class Layout extends React.Component{
	constructor(){
		super();
		this.character = "Alejandra Drispe"
	}

	getVal(){
		return "Toto - Africa";
	}

	render(){
		const name = "Zebitas"
		return (
			<div>
				<h1>It's ALIVE</h1><br/>
				<h1>{3+2}</h1><br/>
				<h1>{name}</h1><br/>
				<h1>{this.character}</h1><br/>
				<h1>{(function(){return 3;})()}</h1>
				<h1>{this.getVal()}</h1><br/>
			</div>
			);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
//Webpack dev server es la forma ideal de hacer un live reload
// Command: webpack-dev-server --content-base src
// npm run dev