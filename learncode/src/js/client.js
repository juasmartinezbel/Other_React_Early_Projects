//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {createStore} from "redux";


const reducer = function(state, action){
	//return "foo" //Retornará siempre esto

	if(action.type == "INC"){
		return state+action.payload;
	}else if(action.type == "DEC"){
		return state-action.payload;
	}

	return state

}
								// Estado inicial
const store = createStore(reducer, 0)

//Store listo, ya nos podemos subscribir

store.subscribe (()=>{
	console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 2})//Habrá un mensaje por dispatch
store.dispatch({type: "DEC", payload: 3})