//Dependencias:
import React, { Component } from 'react';

//NO necesita su propio css. Ese puede ser el general de APP

class Projects extends Component {
  render() {

    console.log(this.props); //Me retorna sad y projects
    
    let projectItems; //Variable limitada al bloque
    
    console.log("Proyectos: ");

    if(this.props.projects){

      //Mapeo para asignar a variable
      projectItems = this.props.projects.map(project => {
        console.log(project) // Item actual
      }); 

    }
    
    return (
      <div className="Projects">
        My Projects
        {this.props.sad}
      </div>
    );
  }
}

export default Projects;

/*
* Muestra todo lo relacionado a mostrar componentes, en este caso, retorna el componente de proyectos
*/
