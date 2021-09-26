exports.registerServer = function() {
    require('./server/billing.server')
}

exports.registerControllers = function() {
    require('./controller/billing.controller')
}
