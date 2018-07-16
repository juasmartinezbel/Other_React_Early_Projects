//Dependencias:
import React, { Component } from 'react';



class AddProject extends Component {

	constructor(){
		super();
		this.state={
			newProject:{}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	//Variable que me mantiene props por default antes de pasarselos
	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	//Handle Submit del form 
	handleSubmit(e){
		if(this.refs.title.value !== ''){
			console.log(this.refs.title.value + " " + this.refs.category.value );
			this.setState(
				{newProject:{

					title: this.refs.title.value,
					category: this.refs.category.value

				}}, function(){
					//Me imprime el nuevo estado
					console.log(this.state);

					//Enviar todo al App.js a través del addToProject usado en el render
					this.props.addToProject(this.state.newProject);

				});
		}else{
			//Se asegura que haya valores.
			alert('Title is required');
		}
		e.preventDefault();
	}

	render() {

		//Mapeo de las posibles categorías definidas en defaultProps para el select
		let categoryOptions= this.props.categories.map(category => {
			return <option key={category} value={category}>{category}</option>
		});

		return (
		  <li className="AddProject">
		    <h3>Add Project</h3>
		    <form onSubmit={this.handleSubmit}>
		    	<div>
		    		<label>Title</label>
		    		<input type="text" ref="title" />
		    	</div>
		    	
		    	<div>
		    		<label>Category</label>
		    		<select ref="category">
		    			{categoryOptions}
		    		</select>
		    	</div>

		    	<input type="submit" value="Submit"/>
		    </form>
		  </li>
		);
	}
}

export default AddProject;
/*
*
* En este proyecto se retorna lo que debe ser cada item de los Proyectos generales
*
*/