
//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import { BrowserRouter, Route, Switch} from "react-router-dom";

//Components
	import Favorites from "./pages/Favorites"
	import Layout from "./pages/Layout"
	import Page404 from "./pages/Page404"
	import Settings from "./pages/Settings"
	import Nav from "./components/Nav"
	import Footer from "./components/Footer"

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
						<Route path="/Settings" component={Settings}></Route>
						<Route path="/Favorites/:article?" component={Favorites}></Route>
						<Route component={Page404}></Route>
					</Switch>
					<Footer/>
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
