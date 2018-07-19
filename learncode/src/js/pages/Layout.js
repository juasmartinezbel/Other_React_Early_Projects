//Dependencies
	import React from "react";

//Components
	import Footer from "../components/Footer";
	import Todo from "../components/Todo";
	import * as TodoActions from "../actions/TodoActions";
	import TodoStore from "../stores/TodoStore";
class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			//Llama ahora del Store, un estado inicial
			todos: TodoStore.getAll(),
			loading: true
		}

		this.getTodos = this.getTodos.bind(this)
	}

	//Cuando se va a renderizar
	//El emit de TodoStore llama a este método
	componentWillMount(){
		TodoStore.on("change", this.getTodos);
		console.log("count", TodoStore.listenerCount("change"));
		//Se aumenta porque solo rendetiza contadores una y otra vez cambiando pestaña. Debería ser 1
	}

	getTodos(){
		this.setState({
				todos: TodoStore.getAll()

		});
	}
	//Evitar memory leaks
	componentWillUnmount(){
		TodoStore.removeListener("change", this.getTodos);
	}

	reloadTodos(){
		TodoActions.reloadTodos()
	}


	render(){

		const {todos} = this.state;

		const TodoComponents = todos.map((todo)=>{
			return <Todo key={todo.id} {...todo}/>;
		});
		return (			
	      <div>
	          <div class="row">
	            <div class="col-lg-12">
	            <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
	              <h1>Todos</h1>
	              <ul>{TodoComponents}</ul>
	            </div>
	          </div>
	      </div>
		);
	}
}

//Se puede requerir ahora en client.js
export default Layout;