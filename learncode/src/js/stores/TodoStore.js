//Dependencies
	import {EventEmitter} from "events";

//Debemos hacer que el TodoStore escuche al Dispatcher
import dispatcher from '../dispatcher'
// Los componentes deben escuchar los eventos del Store y cambiar el almacenamiento
class TodoStore extends EventEmitter{
	constructor(){
		super()
		this.todos =[
			{
				id: 24601,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 12250,
				text: "Pay To Bills",
				complete: false
			}
		]
	}
	//Poder hacer cambios en el Store y que se muestren en los componentes
	createTodo(text){
		const id = Date.now(); //Improvisar un id
		
		this.todos.push({
			id,
			text,
			complete: false,
		});
		console.log(this.todos)
		this.emit("change"); //On Change, envía un mensaje de cambio a cualquiera que pueda tener este evento
	}
	getAll(){
		return this.todos;
	}

	//Poder controlar las acciones
	//Estar subscrito a los dispatcher
	handleActions(action){

		console.log("TodoStore received and action", action);

		//Podemos controlarlo para que sea del tipo que nos importa
		switch(action.type){
			case "CREATE_TODO":{
				this.createTodo(action.text);
				//Probar con: dispatcher.dispatch({type:"CREATE_TODO", text: "new todo"})
			}

			case "RECIEVE_TODOS":{
				//Recibe el todo y emite señal de que haga cambio
				this.todos = action.todos;
				this.emit("change");
					
			}
		}
	}
}
const todoStore = new TodoStore;
//Registrar como el escuchador.
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher; //Probar en consola con dispatcher.dispatch({type: "some event"});

export default todoStore;
