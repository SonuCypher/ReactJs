// import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Name from './components/name'
import Work from './components/Work'
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
 //const { Name } = require('./components/name')

function App() {
  return (
    <div className="App">

    
    <ParentComponent/>
    {/* <Counter /> */}
    {/* <Name name="Abdul Suhaib"/>
    <Name name="Sonu"/>
    <Work role="A Developer" /> */}





    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Thi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
