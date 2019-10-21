/* Copyright 2019 MonCash */
"use strict";
var moncash = require('../');
require('./configure');

var create_payment_json = {
    "amount": 50,
    "transactionId": "1234423"
};


var payment_creator = moncash.payment;
payment_creator.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment_creator.redirect_uri(payment));
    }
});
