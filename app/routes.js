import React from 'react';
import { Route, NotFoundRoute } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

export default (
    // Will add NavBar & Footer before and after RouteHandler, they will remain the same
    <Route handler={App}>
        <Route path='/' handler={Home} />
    </Route>
);