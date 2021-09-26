var billingApp = require('./billing/init')


exports.registerServer = function() {
    billingApp.registerServer()
}

exports.registerControllers = function() {
    billingApp.registerControllers()
}
