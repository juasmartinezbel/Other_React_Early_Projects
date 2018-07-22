//Dependencias
	import { combineReducers } from 'redux'; //Combinar todos

//Reducers
	import postReducer from './postReducer';

export default combineReducers({
	posts: postReducer
});
