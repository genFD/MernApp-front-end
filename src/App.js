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
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact={true}>
            <User />
          </Route>
          <Route path='/places/new'>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
