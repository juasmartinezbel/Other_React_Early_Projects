import dispatcher from "../dispatcher"

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text, 
	})
}

export function deleteTodo(text){
	dispatcher.dispatch({
		type: "DELETE_TODO",
		id, 
	})
}


export function reloadTodos(){
	/*axios("http://someurl.com/somedataendpoint").then((data)=>{
		console.log("got the data!");
	})*/
	dispatcher.dispatch({type: "FETCH_TODOS"})
	setTimeout(()=>{
		//Luego de dos segundos, crea un dispatcher que me hará cambios en los todos
		dispatcher.dispatch({type: "RECIEVE_TODOS",

		todos: [
			{
				id: 246021341,
				text: "Go Shopping Again",
				complete: false
			},
			{
				id: 122521310,
				text: "Hug Wife",
				complete: true
			}
		]});
		if(false){
			dispatcher.dispatch({type:"FETCH_TODOS_ERROR"})
		}
	}, 1000)
}