//Dependencies
  import React, { Component } from 'react';
  import logo from './logo.svg';

//Stylesheet
  import './App.css';

//Components
  import Posts from './components/Posts'


//Todo se tomará de aquí: https://jsonplaceholder.typicode.com/
class App extends Component {

  //Cuando el componente se monte, ejecutará la acción
  componentWillMount(){
    //console.log(123);
    fetch('https://jsonplaceholder.typicode.com/posts') //Hacemos fetch del origen y retorna una promesa
    .then(res => res.json()) //El resultado res se debe pasar a un json
    .then(data => console.log(data)) //El resultado data del anterior se pasa a los logs
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;
