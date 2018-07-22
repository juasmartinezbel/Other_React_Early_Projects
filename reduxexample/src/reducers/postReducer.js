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
		default:
			return state;
	}

}