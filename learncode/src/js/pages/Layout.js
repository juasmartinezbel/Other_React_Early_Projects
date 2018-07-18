//Dependencies
	import React from "react";

//Components
	import Footer from "../components/Footer";
	import Todo from "../components/Todo"
	import TodoStore from "../stores/TodoStore"
class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			//Llama ahora del Store, un estado inicial
			todos: TodoStore.getAll(),
		}
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