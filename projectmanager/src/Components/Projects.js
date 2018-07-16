//Dependencias:
import React, { Component } from 'react';

//Sub-Componentes
import ProjectItem from './ProjectItem';

//NO necesita su propio css. Ese puede ser el general de APP

class Projects extends Component {
  render() {
    let projectItems; //Variable limitada al bloque
    
    console.log("Proyectos: ");

    if(this.props.projects){

      //Mapeo para asignar a variable
      projectItems = this.props.projects.map(project => {
        //Siempre debe tener un valor llave
        return (
            <ProjectItem key = {project.id} project = {project} />
          );
      }); 

      /*
      *
      * App.js le envía los props como argumento a Projects.js llamado this.props.projects
      * Projects.js hace un mapeo de this.props.projects 
      * Se aplican los props a ProjectItem.js
      * projectItems crea un componente de cada this.props.projects sacado de ProjectItem.js
      *
      */

    }
    


    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;

/*
* Muestra todo lo relacionado a mostrar componentes, en este caso, retorna el componente de proyectos
*/
