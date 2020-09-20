import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/style/style.css';

import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Home from './Components/Pages/Home';
import Profile from './Components/Pages/Profile';

import { useFirebaseAuth } from '@use-firebase/auth';

function App() {
  const { isSignedIn } = useFirebaseAuth();
  return (

    isSignedIn ?

      <Home />

      :

      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </Router>
  );
}

export default App;
