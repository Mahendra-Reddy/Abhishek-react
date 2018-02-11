import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Compliance</h1>
        </header>
        <div>
          <span><button><Link to="/getuserlist">Get User List</Link></button></span>
          <span><button><Link to="/createuser">Create User</Link></button></span>
        </div>
      </div>
    );
  }
}

export default App;
