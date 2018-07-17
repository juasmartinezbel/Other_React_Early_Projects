//Dependencies
	import React from "react";
//Components
	import Links from "./Links"
class Featured extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (			
			<div>		
				<h1>Featured</h1>
				<Links/>
			</div>
		);
	}
}

export default Featured;