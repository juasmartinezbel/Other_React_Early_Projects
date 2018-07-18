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
				text: "Pay To Bill The Cuck Guy",
				complete: false
			}
		]
	}

	getAll(){
		return this.todos;
	}
}
const todoStore = new TodoStore;


export default todoStore;
