import React from 'react';
import Container1 from './Containers/Container1';
import Container2 from './Containers/Container2';
import Container3 from './Containers/Container3';
import Header from './Containers/header';
import history from './Utils/history';
import { Router, Route, Switch } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router history = {history}>
          <div>
            <Header />
            <Switch>
              <Route exact path = '/' component = {Container1} />
              <Route path = '/tasks' exact component = {Container2} /> 
              <Route path = '/notes' component = {Container3} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes;