import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default (
    // Will add NavBar & Footer before and after RouteHandler, they will remain the same
    <Route handler={App}>
        <Route path='/' handler={Home} />
    </Route>
)