/* jslint browser:true */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './components/Layout';
import Game from './components/Game';
import Create from './components/Create';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Create}></IndexRoute>
      <Route path="game" component={Game}></Route>
    </Route>
  </Router>,
  app);
