//Dependencies
  import React, { Component } from 'react';
  import logo from './logo.svg';

//Stylesheet
  import './App.css';

//Components
  import Posts from './components/Posts'


//Todo se tomará de aquí: https://jsonplaceholder.typicode.com/
class App extends Component {

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
