import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './Users/Pages/User';
import User from './Users/Pages/User';
import NewPlace from './Places/Pages/NewPlace';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <User />
        </Route>
        <Route path='/places/new'>
          <NewPlace />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
