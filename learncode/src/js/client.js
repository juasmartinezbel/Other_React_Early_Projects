//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {applyMiddleware, createStore} from "redux";
	import {createLogger} from "redux-logger"; //npm install -S "redux-logger"
	import thunk from "redux-thunk"; //npm install -S "redux-thunk"
	import axios from "axios"; //npm install -S "axios"
const reducer = function(state={}, action){
  return state 
}

							
const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducer, middleware)

//En vez de enviar un objeto, enviemos el despachador
store.dispatch(dispatch =>{
	dispatch({type: "FOO"})
	//do something async
	dispatch({type: "BAR"})
})

//Es un montón de funciones sincronas