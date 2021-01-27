//const { Router } = require('express');
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    res.send("Cesar");
})

routes.get('/contatos', (req, res) => {
    res.send("Rafael, Camila ");
})

//module.exports = routes;
export default routes;
