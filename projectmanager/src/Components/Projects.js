//Dependencias:
	import React, { Component } from 'react';
		//npm install --save prop-types
	import PropTypes from 'prop-types';

//NO necesita su propio css. Ese puede ser el general de APP

class Projects extends Component {
  render() {
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
