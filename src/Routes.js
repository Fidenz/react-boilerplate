import React from 'react';
import { Route, } from 'react-router-dom';

import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
    <Route exact path="/signin" component={SignIn} />
  </>
);

export default Routes;