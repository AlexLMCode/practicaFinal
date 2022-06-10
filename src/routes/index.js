const express = require('express');
const infoClientsRoutes = require('./infoClientsRoutes');
const locClientsRoutes = require('./locClientsRoutes');
const languagesRoutes = require('./languagesRoutes');


const routerApi = (app) => {

    const routesProject = express.Router();

    // http://localhost:5000/api/v1
    app.use('/api/v1', routesProject);
    routesProject.use('/info-clients', infoClientsRoutes)
    routesProject.use('/loc-clients', locClientsRoutes)
    routesProject.use('/languages', languagesRoutes)

};

module.exports = { routerApi };