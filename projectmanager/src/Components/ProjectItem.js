//Dependencias:
import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ProjectItem extends Component {
	
	static propTypes = {
      project: PropTypes.object.isRequired,
      onDelete: PropTypes.func
    }

  deleteProject(id){
  	 console.log("Deleted");
  	 //Para poder eliminar, hay que enviar el comando a Project y de ahí a App
  	 //Se enviará en la función onDelete usada en el render de projects
  	 this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title} </strong> - {this.props.project.category} 

        <a href="#" onClick = {this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}


export default ProjectItem;
/*
*
* En este proyecto se retorna lo que debe ser cada item de los Proyectos generales
*
*/