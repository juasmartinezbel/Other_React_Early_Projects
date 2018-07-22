import {FETCH_POSTS, NEW_POST} from './types';

/*
export function fetchPosts(){
	//El thunk nos permite llamar una función de dispatch directamente para hacer funciones asincronas
	return function(dispatch){
		fetch('https://jsonplaceholder.typicode.com/posts') //Hacemos fetch del origen y retorna una promesa
    	.then(res => res.json()) //El resultado res se debe pasar a un json
    	.then(posts => dispatch({//Se hace un dispatch y su payload
    		type: FETCH_POSTS,
    		payload: posts
    	}));
	}
}
*/


//Una forma más limpia
export const fetchPosts = () => dispatch =>{
	//El thunk nos permite llamar una función de dispatch directamente para hacer funciones asincronas
	fetch('https://jsonplaceholder.typicode.com/posts') //Hacemos fetch del origen y retorna una promesa
	.then(res => res.json()) //El resultado res se debe pasar a un json
	.then(posts => dispatch({//Se hace un dispatch y su payload
		type: FETCH_POSTS,
		payload: posts
	}));
}