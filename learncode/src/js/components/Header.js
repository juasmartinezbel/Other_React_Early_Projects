//Dependencies
	import React from "react";

//Componentes
	import Title from "./header/Title"

class Header extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<Title name={this.props.name}/>
				
			</div>
		);
	}
}

export default Header;