//Dependencies
	import React from "react";

//Components
	import Footer from "../components/Footer";

class Layout extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (			
	      <div>
	          <div class="row">
	            <div class="col-lg-12">
	              <h1>TuMamá.net</h1>
	            </div>
	          </div>
	          <Footer/>
	      </div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;