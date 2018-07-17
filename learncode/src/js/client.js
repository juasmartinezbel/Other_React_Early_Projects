//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";

//Components
	import Layout from "./components/Layout"


const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
//Webpack dev server es la forma ideal de hacer un live reload
// Command: webpack-dev-server --content-base src
// npm run dev