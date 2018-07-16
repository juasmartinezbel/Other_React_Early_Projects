//Dependencias:
import React, { Component } from 'react';

//Hojas de Estilos
import './App.css';

//Components
import Projects from './Components/Projects' //No se necesita el .js

//Solo puede haber un main <div className="Archivo">

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects />
      </div>
    );
  }
}

export default App; // Retorna el JSX como un componente o toda la ppagina a mostrar
