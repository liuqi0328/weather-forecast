import React from 'react';
import Router from 'react-router-dom';
import routes from './routes';

// URL listener, when URL is changed it will be re-rendered
// main.js is the entrance of the React app, when Browserify connects the entire
// dependencies tree and finally outputs bundle.js it will be used
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});