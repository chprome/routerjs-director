var Router = require('director').Router;

/*** Routes.js ***/

var contentWrapper = document.getElementById('content-wrapper');

function accueil()  {
    contentWrapper.innerHTML = '<button id="go-users">users</button>';    
    bindAcceuilEvents();
}

function leaveAccueil()  {
    console.log('leave accueil');
}

function log() {
    console.log('je log');
}

function users(id) {
    contentWrapper.innerHTML = 'Users '+id;    
}

function about() {
    contentWrapper.innerHTML = 'About';    
}

var routes = {
    '/': {
        on: accueil,
        after: leaveAccueil
    },
    '/users/:id': [log, users],
    '/about': [log, about]
};

var router = Router(routes);
router.init().configure({strict: false});

/*** Routes ***/

function bindAcceuilEvents() {
    document.getElementById('go-users').addEventListener('click', function() {
        router.dispatch('on', '/users');
    });
}