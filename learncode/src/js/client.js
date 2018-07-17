//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import { BrowserRouter, Route, Switch} from "react-router-dom";
	import Bootstrap from "../vendor/bootstrap-without-jquery"

//Components
	import Archives from "./pages/Archives"
	import Featured from "./pages/Featured"
	import Layout from "./pages/Layout"
	import Page404 from "./pages/Page404"
	import Settings from "./pages/Settings"


const app = document.getElementById('app');
ReactDOM.render(
	<div>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Layout}></Route>
				<Route exact path="/Featured" component={Featured}></Route>
				<Route exact path="/Archives" component={Archives}></Route>
				<Route exact path="/Settings" component={Settings}></Route>
				<Route component={Page404}></Route>
			</Switch>
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
