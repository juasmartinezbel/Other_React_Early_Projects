//Dependencias:
	import React, { Component } from 'react';
	import uuid from 'uuid'; //npm install --save uuid: Genera ids

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
  	this.handleAddProject=this.handleAddProject.bind(this);
  	this.handleDeleteProject=this.handleDeleteProject.bind(this);
  }

  //Life Cycle, se ejecuta por cada renderización
  //Mejor mantener esto aparte del constructor
  componentWillMount(){
  	this.setState({
			projects: [
	  			{
	  				id: uuid.v4(),
		  			title: 'Business Website',
		  			category: 'Web Design'
		  		},
		  		{
		  			id: uuid.v4(),
		  			title: 'Social',
		  			category: 'Mobile Development'
		  		},
		  		{
		  			id: uuid.v4(),
		  			title: 'Shopping',
		  			category: 'Web Development'
		  		}]
	  	});
  }

  //Esta función se dispara cuando desde un componente AddProject se hace submit
  handleAddProject(project){
	console.log("Se ha recibido: ")  	
  	console.log(project);

  	//Se actualiza el this.state.projects haciendole push de lo nuevo
  	let projects = this.state.projects;
  	projects.push(project);
  	this.setState({projects:projects});
  }

  //Esta función se dispara cuando se desea eliminar un item
  handleDeleteProject(id){
	console.log("Se ha recibido la instrucción para eliminar")  

	//Se actualiza el this.state.projects buscando el id del proyecto a eliminar.
	let projects = this.state.projects;
	let index = projects.findIndex(x=>x.id===id);
	projects.splice(index,1); //Extirpa el elemento
	this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        <AddProject addToProject={this.handleAddProject}/>
        <Projects onDelete={this.handleDeleteProject} projects={this.state.projects}/>
      </div>
    );
  }
}

export default App; // Retorna el JSX como un componente o toda la ppagina a mostrar
