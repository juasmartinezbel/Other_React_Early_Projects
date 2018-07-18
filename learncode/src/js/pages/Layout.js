//Dependencies
	import React from "react";

//Components
	import Footer from "../components/Footer";
	import Todo from "../components/Todo"
class Layout extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: [
				{
					id: 24601,
					text: "Go Shopping",
					complete: false
				},
				{
					id: 12250,
					text: "Pay Bills",
					complete: false
				}
			],
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