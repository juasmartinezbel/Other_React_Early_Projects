//Dependencias:
	import React, { Component } from 'react';

//Hojas de Estilos
	import './App.css';

//Components
	import Projects from './Components/Projects'
	import AddProject from './Components/AddProject'

class App extends Component {

  constructor(){
  	super(); 
  	this.state={
  		projects: []
  	}
  }

  //Life Cycle, se ejecuta por cada renderización
  //Mejor mantener esto aparte del constructor
  componentWillMount(){
  	this.setState({
			projects: [
	  			{
		  			title: 'Business Website',
		  			category: 'Web Design'
		  		},
		  		{
		  			title: 'Social',
		  			category: 'Mobile Development'
		  		},
		  		{
		  			title: 'Shopping',
		  			category: 'Web Development'
		  		}]
	  	});
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects sad=' Holi Boli soy un Propi' projects={this.state.projects}/>
      </div>
    );
  }
}

export default App; // Retorna el JSX como un componente o toda la ppagina a mostrar
