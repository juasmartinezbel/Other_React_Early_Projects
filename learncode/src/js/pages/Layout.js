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
			<div>		
				<h1>TuMamá.zeb</h1>
				<Links/>
			</div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;