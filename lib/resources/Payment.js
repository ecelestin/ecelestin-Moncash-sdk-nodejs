/* Copyright 2019 MonCash */
"use strict";

var generate = require('../generate');
var api = require('../api');
var configuration = require('../configure');

/**
 * Create or get details of payments
 * @return {Object} Payment functions
 */
function payment() {
    var baseURL = configuration.default_options.payment_creator_uri;
    var baseRedirectURI = '/Payment/Redirect';
    var operations = ['create'];

    var ret = {
        baseURL: baseURL,
        baseRedirectURI: baseRedirectURI,
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

        redirect_uri: function redirectUri(payment){
            return api.redirectUri(this.baseRedirectURI+"?token="+payment.payment_token.token);
        }
    };
    ret = generate.mixin(ret, operations);
    return ret;
}

module.exports = payment;
