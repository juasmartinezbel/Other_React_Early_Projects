//Dependencias:
	import React, { Component } from 'react';
		//npm install --save prop-types
	import PropTypes from 'prop-types';

//Hojas de Estilos
	import './App.css';

//Components
	import Projects from './Components/Projects' //No se necesita el .js

//Solo puede haber un main <div className="Archivo">

//Pasar un argumento = Props
/*
	En App: 
	<Component attribute = "Argument">

	En Componente:
	<div...>
		{this.props.attribute}
	</div>
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects sad="Holi Boli, soy un propi" />
      </div>
    );
  }
}

export default App; // Retorna el JSX como un componente o toda la ppagina a mostrar
