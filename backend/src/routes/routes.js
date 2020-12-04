const routes = require('express').Router();

const All = require('../controllers/All');
const Onevent = require('../controllers/Onevent');
const Prevent = require('../controllers/Prevent');

routes.post('/onevent', Onevent.create);
routes.get('/onevent/search/:tag', Onevent.search);
routes.get('/onevent/:id', Onevent.index);
routes.put('/onevent/:id', Onevent.update);
routes.delete('/onevent/:id', Onevent.destroy);
routes.get('/onevent', Onevent.show);

routes.post('/prevent', Prevent.create);
routes.get('/prevent/search/:tag', Prevent.search);
routes.get('/prevent/:id', Prevent.index);
routes.put('/prevent/:id', Prevent.update);
routes.delete('/prevent/:id', Prevent.destroy);
routes.get('/prevent', Prevent.show);

routes.get('/event/all', All.all);

module.exports = routes;