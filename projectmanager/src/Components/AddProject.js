//Dependencias:
import React, { Component } from 'react';



class AddProject extends Component {

	//Variable que me mantiene props por default antes de pasarselos
	static defaultProps = {
		categories: ['Web Design', 'Web Development', 'Mobile Development']
	}

	render() {
		let categoryOptions= this.props.categories.map(category => {
			return <option key={category} value="category">{category}</option>
		});

		return (
		  <li className="AddProject">
		    <h3>Add Project</h3>
		    <form>
		    	<div>
		    		<label>Title</label>
		    		<input type="text" ref="title" />
		    	</div>
		    	<div>
		    		<label>Title</label>
		    		<select ref="category">
		    			{categoryOptions}
		    		</select>
		    	</div>
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