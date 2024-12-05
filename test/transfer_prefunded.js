/* Copyright 2019 MonCash */
"use strict";
var moncash = require('../');
require('./configure');

var data_json = {
    "amount": 50,
    "receiver": "50938662809",
    "desc": "Test",
    "reference": Math.random().toString(16).slice(2)
};


var transfer = moncash.transfer;
transfer.process(data_json, function (error, payment) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment_creator.redirect_uri(payment));
    }
});
