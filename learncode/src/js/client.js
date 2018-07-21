//Dependencies
	import React from "react"
	import ReactDOM from "react-dom";
	import {applyMiddleware, createStore} from "redux";


const reducer = function(state=0, action){
  if(action.type === "INC"){ 
    return state+1; 
  }else if(action.type === "DEC"){ 
    return state-1; 
  } else if (action.type === "E"){
  	throw new Error("AAAAAA CTM")
  }
  return state 
}

// middleware que se configurará cada vez
const logger = (store) => (next) => (action) =>{
	console.log("action fired", action)
	if(action.type==="INC"){
		action.type="DEC"
	}else if (action.type==="DEC"){
		action.type="INC"
	}
	next(action);
}

const error = (store) => (next) => (action) =>{
	try{
		next(action);
	}catch(e){
		console.log(";__;", e);
	}
}
							
const middleware = applyMiddleware(logger, error); //Tantas , como sean necesarias para cada middleware

const store = createStore(reducer, 
							1, // Estado inicial 
						middleware)

store.subscribe(()=>{
	console.log("store changed", store.getState()); //No ejecutará por si solo a menos de que en logger se pase "next"
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})//Habrá un mensaje por dispatch
store.dispatch({type: "DEC"})
store.dispatch({type: "E"})