//Dependencies
	import React from "react";

class BLANK extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<h1>WELCOME {this.props.name}</h1><br/>
			</div>
		);
	}
}

export default BLANK;