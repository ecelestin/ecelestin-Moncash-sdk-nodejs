/* Copyright 2019 MonCash */
"use strict";

var generate = require('../generate');
var api = require('../api');
var configuration = require('../configure');

/**
 * Look up and refund captured payments
 * @return {Object} capture functions
 */
function capture() {
    var baseURL = '';
    var operations = [];

    var ret = {
        baseURL: baseURL,

        getByTransactionId: function get(id, config, cb) {
            api.executeHttp('POST', configuration.default_options.payment_transaction_uri, {"transactionId": id}, config, cb);
        },
        
        getByOrderId: function get(id, config, cb) {
            api.executeHttp('POST', configuration.default_options.payment_order_uri, {"orderId": id}, config, cb);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = capture;
