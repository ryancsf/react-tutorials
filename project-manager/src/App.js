import React, { Component } from 'react';
import Projects from './Components/Projects';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Ecommerce',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Web Design'
        }
      ]
    }
  }
  render() {
    return (
      // everything has to be under one folder
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
