//Dependencies
	import React from "react";
//Components
	import Links from "./Links"
	
class Archives extends React.Component{
	constructor(){
		super();
	}

	render(){
		// Cambiará si uno escribe /Archives/algo
		console.log(this.props)
		//Versión fea: <h2>{this.props.match.params.article}</h2>
		//Versión Pro:
		const{params} = this.props.match;
		const {article} = params;
		return (			
			<div>		
				<h1>Archives</h1>
				<h2>{params.article}</h2>
				{/*O simplemente:*/}
				<h2>{article}</h2>
				<Links/>
			</div>
		);
	}
}

export default Archives;