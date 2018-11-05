var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var ejs = require('ejs');
var React = require('react');
var Router = require('react-router-dom');
var routes = require('./app/routes');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware, will execute everytime the request has been sent
// Server side, after rendering the HTML markup will be sent to index.html,
// then ejs template will insert it to <div id="app">{{ html | safe }}</div>,
// while for client side after rendering the HTML markup will be sent to
// <div id="app"></div>
app.use(function(req, res) {
    Router.run(routes, req.path, function(Handler) {
        var html = React.renderToString(React.createElement(Handler));
        var page = ejs.renderFile('views/index.html', { html: html });
        res.send(page);
    });
});

app.listen(app.get('port'), function() {
    console.log('Express server listener starts on port: ' + app.get('port'));
});

