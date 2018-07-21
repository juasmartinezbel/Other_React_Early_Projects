<<<<<<< HEAD

//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import { BrowserRouter, Route, Switch} from "react-router-dom";
=======
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
//Hay que instalar npm install -S react-redux

import Layout from "./components/Layout"
import store from "./store"

const app = document.getElementById('app')


//Siempre hay que renderizar el proveedor más bien con un store asignado
ReactDOM.render(
		<Provider store={store}>
			<Layout/>
		</Provider>
			, app);
>>>>>>> learncode-redux
