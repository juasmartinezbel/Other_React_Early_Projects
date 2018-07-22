/*
Store: 
  1. El reducer
  2. El estado inicial
  3... El enhanser y/o el middleware
*/
//const store = createStore(()=>[],{},applyMiddleware());

//Dependencias
	import { createStore, applyMiddleware } from 'redux';
	import thunk from 'redux-thunk'; //Un middleware

//Reducers
	import rootReducer from './reducers';

	
const initialState={};

const middleware = [thunk];

const store = createStore(
					rootReducer, 
					initialState, 
					applyMiddleware(...middleware)/*El thunk como argumento del AM*/)


export default store;