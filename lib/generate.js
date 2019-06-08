/* Copyright 2019 MonCash */
"use strict";
var api = require('./api');

/**
 * Attach REST operations from restFunctions as required by a MonCash API
 * resource e.g. create, get and list are attahed for Payment resource
 * @param  {Object} destObject A MonCash resource e.g. Invoice
 * @param  {Array} operations Rest operations that the destObject will allow e.g. get
 * @return {Object}            
 */
function mixin(destObject, operations) {
    operations.forEach(function (property) {
        destObject[property] = restFunctions[property];
    });
    return destObject;
}

/**
 * restFunctions Object containing the REST CRUD methods and MonCash specific REST methods that
 * are shared between at least two of the REST endpoints, otherwise the function
 * will be defined within the resource definition itself
 * @type {Object}
 */
var restFunctions = {
    create: function create(data, config, cb) {
        api.executeHttp('POST', this.baseURL, data, config, cb);
    }
};

module.exports.mixin = mixin;
