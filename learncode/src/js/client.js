//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {applyMiddleware, createStore} from "redux";
	import {createLogger} from "redux-logger"; //npm install -S "redux-logger"
	import thunk from "redux-thunk"; //npm install -S "redux-thunk"
	import axios from "axios"; //npm install -S "axios"
	import promise from "redux-promise-middleware"
const initialState={
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = function(state=initialState, action){
	switch(action.type){
		case "FETCH_USER_PENDING":{
			return {...state, fetching: true}
			break;
		}
		case "FETCH_USER_REJECTED":{
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "FETCH_USER_FULFILLED" :{
			return {...state, fetching: false, fetched: true, users: action.payload}
			break;
		}
	}
  	return state 
}

							
const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(reducer, middleware)

//
store.dispatch({
	type:"FETCH_USER",
	payload: axios.get("http://rest.learncode.academy/api/wstern/users") //Es un tipo promesa y enviará el tipo para guardarse
	//Si es valido será TYPE_PENDING ---> TYPE_FULFILLED
	//Si tiene errores será TYPE_PENDING--->TYPE_REJECTED
})

//Es un montón de funciones sincronas