
//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import { BrowserRouter, Route, Switch} from "react-router-dom";

//Components
	import Archives from "./pages/Archives"
	import Featured from "./pages/Featured"
	import Layout from "./pages/Layout"
	import Page404 from "./pages/Page404"
	import Settings from "./pages/Settings"
	import Nav from "./components/Nav"

const app = document.getElementById('app');
//¿Cómo añadir sub-paginas?

//Hacer estilos en JSX: 
const containerStyle = {
    		marginTop: "60px"
    	  	//También: "margin-top": "60px"
};

ReactDOM.render(
	
	<div>

		<BrowserRouter>	
			<div>
				<Nav/>
				<div class="container" style={containerStyle}>
					<Switch>
						<Route exact path="/" component={Layout}></Route>
						<Route path="/Featured" component={Featured}></Route>
						<Route path="/Archives/:article?" component={Archives}></Route>
						<Route path="/Settings" component={Settings}></Route>
						<Route component={Page404}></Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
		
	</div>, 
	app);

//Webpack dev server es la forma ideal de hacer un live reload
// Command: webpack-dev-server --content-base src
// npm run dev


/* Colocar rutas: 
npm install -S react-router
npm install -S react-router-dom
*/
