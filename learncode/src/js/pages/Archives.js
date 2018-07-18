//Dependencies
	import React from "react";
	
class Archives extends React.Component{
	constructor(){
		super();
	}

	render(){
		const{article} = this.props.match.params;
		return (			
			<div>		
				<h1>Archives</h1>
				<h2>{article}</h2>
			</div>
		);
	}
}

export default Archives;