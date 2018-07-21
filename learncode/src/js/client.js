//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {applyMiddleware, createStore} from "redux";
	import {createLogger} from "redux-logger"; //npm install -S "redux-logger"
	import thunk from "redux-thunk"; //npm install -S "redux-thunk"
	import axios from "axios"; //npm install -S "axios"

const initialState={
	fetching: false,
	fetched: false,
	users: [],
	error: null
};

const reducer = function(state=initialState, action){
	switch(action.type){
		case "FETCH_USER_START":{
			return {...state, fetching: true}
			break;
		}
		case "FETCH_USER_ERROR":{
			return {...state, fetching: false, error: action.payload}
			break;
		}
		case "RECEIVE_USERS" :{
			return {...state, fetching: false, fetched: true, users: action.payload}
			break;
		}
	}
  	return state 
}

							
const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducer, middleware)

//En vez de enviar un objeto, enviemos el despachador
store.dispatch(dispatch =>{
	dispatch({type: "FETCH_USER_START"})
	axios.get("http://rest.learncode.academy/api/wstern/users").then((response)=>{ //Cambiar url pa ver error
		dispatch({type: "RECEIVE_USERS", payload:response.data})
	}).catch((err)=>{
		dispatch({type:"FETCH_USER_ERROR", payload: err})
	})
})

//Es un montón de funciones sincronas