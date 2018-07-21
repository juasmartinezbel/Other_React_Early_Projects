//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {combineReducers, createStore} from "redux";


const userReducer = (state={}, action) =>{
	switch(action.type){
		case "CHANGE_NAME":{
					//clonar para cambiar un pedazo del archivo.
			state = {...state, name: action.payload}
			break;
		}
		case "CHANGE_AGE":{
			state = {...state, age: action.payload}
			break;
		}
	}
	return state //default, el vacío en argumento arriba. Un objeto vacío tipo user
};


const tweetsReducer = (state = [], action) =>{
	return state //default, el vacío en argumento arriba. Un objeto vacío tipo user		
}

const reducers = combineReducers({
	user: userReducer,
	tweets: tweetsReducer
})
								
const store = createStore(reducers); 

//Store listo, ya nos podemos subscribir
store.subscribe (()=>{
	console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: 35})
store.dispatch({type: "CHANGE_AGE", payload: 36})