//Dependencias:
	import React, { Component } from 'react';

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

  constructor(){
  	//Se definirán los estados de la aplicación.
  	super(); //SIEMPRE LLAMAR SUPER
  	this.state={
  		projects: [
	  		{
	  			title: 'Business Website',
	  			category: 'Web Design'
	  		},
	  		{
	  			title: 'Social',
	  			category: 'Mobile'
	  		},
	  		{
	  			title: 'Shopping',
	  			category: 'Web Development'
	  		}
  		]
  	}
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects sad=' Holi Boli soy un Propi' projects={this.state.projects}/>
      </div>
    );
  }
}

export default App; // Retorna el JSX como un componente o toda la ppagina a mostrar
