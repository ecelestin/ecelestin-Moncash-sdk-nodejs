/* Copyright 2019 MonCash */
"use strict";

var configuration = require('./configure');
var api = require('./api');

module.exports = function () {

    function configure(options) {
        api.configure(options);
    }

    function generateToken(config, cb) {
        api.generateToken(config, cb);
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        generateToken: generateToken,
        payment: require('./resources/Payment')(),
        capture: require('./resources/Capture')(),
        generate_token: generateToken
    };
};
