//Dependencias:
import React, { Component } from 'react';



class ProjectItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title} </strong> - {this.props.project.category}
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