/* Copyright 2019 moncash */
"use strict";
var moncash = require('../');
require('./configure');

var create_payment_json = {
    "amount": 50,
    "orderId": "123445564454542123"
};


moncash.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});
