//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {createStore} from "redux";


const reducer = function(state, action){
	//return "foo" //Retornará siempre esto

	if(action.type == "INC"){
		return state+1;
	}else if(action.type == "DEC"){
		return state-1;
	}

	return state

}
								// Estado inicial
const store = createStore(reducer, 1)

//Store listo, ya nos podemos subscribir

store.subscribe (()=>{
	console.log("store changed", store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})//Habrá un mensaje por dispatch
store.dispatch({type: "DEC"})