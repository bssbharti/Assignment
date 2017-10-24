import React, { Component } from 'react';
import './css/App.css';
// import * as data from './data/data.json';
import { UserForm } from './modules/userForm';
import { Switch, Route } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
     <div className="container">
     	<Switch>
          <Route exact path="/" component ={UserForm}/>
          {/*<Route path="/all" component ={App}/>*/}
     	</Switch>
     </div>
    );
  }
}