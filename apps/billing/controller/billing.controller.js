var express = require('express');

var server = require('../server/billing.server');
var routes = require('../route/billing.route').billingRoutes
var app = require('../server/billing.server').getAppInstance()

//Middlewares
app.use(express.json());


app.get(routes.getBillForTask, (req, res) => {
    res.json({
        'bill': 'bill'
    })
});
