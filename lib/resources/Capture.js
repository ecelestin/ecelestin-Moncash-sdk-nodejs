/* Copyright 2019 MonCash, Inc. */
"use strict";

var generate = require('../generate');

/**
 * Look up and refund captured payments
 * @return {Object} capture functions
 */
function capture() {
    var baseURL = '/Api/v1/';
    var operations = ['getByTransactionId', 'getByOrderId'];

    var ret = {
        baseURL: baseURL
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = capture;
