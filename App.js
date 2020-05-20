import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Login from './compnent/login'
import {BrowserRouter as Router,Route,
  /*Redirect*/Switch} from 'react-router-dom';
import Home from './App.js'
//import sidebar from './compnent/sidebar'



export class App extends Component {
  render() {
    return (  
      <div>
        <Router>
          <div>
            <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/" component = {Home}/>
            
          </Switch>
          </div>
         </Router>
      </div>
    )
  }
}


export default App;
