import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState ={
	items: [],
	item: {}, //Single post
}
												//Debe ser uno de los tipos
export default function(state = initialState, action){
	switch(action.type){
		case FETCH_POSTS:
			return{
				...state,
				items: action.payload
			};
		case NEW_POST:
			//No es que la base de datos se actualice
			//Empujaremos esto a lo que ya teníamos

			const u = {...state,
				item: action.payload}//solo el post}
			return u;
		default:
			return state;
	}

}