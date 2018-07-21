//Dependencies
  import React, { Component } from 'react';
  import logo from './logo.svg';

//Stylesheet
  import './App.css';

//Components
  import Posts from './components/Posts'

class App extends Component {

  //Cuando el componente se monte, ejecutará la acción
  componentWillMount(){
    console.log(123);
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
