/* Copyright 2019 MonCash */
"use strict";

var generate = require('../generate');
var api = require('../api');
var configuration = require('../configure');

/**
 * Create or get details of payments
 * @return {Object} Payment functions
 */
function transfer() {
    var baseURL = configuration.default_options.prefunded_uri;
    var operations = ['prefunded'];

    var ret = {
        baseURL: baseURL,
        // /**
        //  * Execute(complete) a MonCash or payment that has been approved by the payer
        //  * @param  {String}   id     Payment identifier
        //  * @param  {Object}   data   Transaction details if updating a payment
        //  * @param  {Object|Function}   config     Configuration parameters e.g. client_id, client_secret override or callback
        //  * @param  {Function} cb     
        //  * @return {Object}          Payment object for completed MonCash payment
        //  */
        // execute: function execute(id, data, config, cb) {
        //     api.executeHttp('POST', this.baseURL + id + '/execute', data, config, cb);
        // },

        process: function post(data, config, cb) {
            api.executeHttp('POST', configuration.default_options.prefunded_uri, data, config, cb);
        },
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = transfer;
