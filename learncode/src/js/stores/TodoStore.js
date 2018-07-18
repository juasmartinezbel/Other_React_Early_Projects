//Dependencies
	import {EventEmitter} from "events";

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
}
const todoStore = new TodoStore;
window.todoStore = todoStore; //Probar en consola con todoStore.createTodo("Test")

export default todoStore;
