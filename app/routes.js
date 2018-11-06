'use strict';

import React from 'react';
// import { Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

var Route = require('react-router-dom');

export default (
    <Route handler={App}>
        <Route path='/' handler={Home} />
    </Route>
);