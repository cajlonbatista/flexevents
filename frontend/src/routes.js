import React from 'react';

import {
  Route,
  Switch
} from 'react-router-dom';

import Create from './pages/Create/Create';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/add' component={Create}></Route>
      <Route exact path='*' component={NotFound}></Route>
    </Switch>
  );
}