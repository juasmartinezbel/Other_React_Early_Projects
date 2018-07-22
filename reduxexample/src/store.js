/*
Store: 
  1. El reducer
  2. El estado inicial
  3... El enhanser y/o el middleware
*/
//const store = createStore(()=>[],{},applyMiddleware());

//Dependencias
	import { createStore, applyMiddleware, compose } from 'redux';
	import thunk from 'redux-thunk'; //Un middleware

//Reducers
	import rootReducer from './reducers';

	
const initialState={};

const middleware = [thunk];

const store = createStore(
					rootReducer, 
					initialState,
					compose( //para multiples enhasers
						applyMiddleware(...middleware),/*El thunk como argumento del AM*/
						window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
					))//Compose y window.... para usar firefox devtools


export default store;