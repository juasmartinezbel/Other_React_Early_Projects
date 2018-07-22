//Dependencies
  import React, { Component } from 'react'
  import { Provider } from 'react-redux'; //El pegamento entre react y redux

//Stylesheet
  import logo from './logo.svg';
  import './App.css';

//Components
  import Posts from './components/Posts'
  import Postform from './components/Postform'

//Store and Actions
  import store from './store';

/* Dummy Program: Debe tener al menos:
  1. El reducer
  2. El estado inicial
  3. El enhanser o el middleware
*/
//const store = createStore(()=>[],{},applyMiddleware());

//Todo se tomará de aquí: https://jsonplaceholder.typicode.com/
class App extends Component {

  render() {
    return (
      //Se le debe pasar el store para wrappear la aplicación
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Postform/>
          <hr/>
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
