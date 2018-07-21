//Dependencies
	import React from "react" 
	import ReactDOM from "react-dom"; 
	import {applyMiddleware, createStore} from "redux"; 
	import {createLogger} from "redux-logger"; //npm install -S "redux-logger" 
	import thunk from "redux-thunk"; //npm install -S "redux-thunk" 
	import axios from "axios"; //npm install -S "axios" 
	import promise from "redux-promise-middleware" 
//Reductores
	import reducer from "./reducers"

const middleware = applyMiddleware(promise(),thunk,createLogger())


export default createStore(reducer,middleware)