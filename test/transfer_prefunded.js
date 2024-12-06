/* Copyright 2019 MonCash */
"use strict";
var moncash = require('../');
require('./configure');

var data_json = {
    "amount": 50,
    "receiver": "<Phone number>",
    "desc": "Test",
    "reference": Math.random().toString(16).slice(2)
};


var transfer = moncash.transfer;
transfer.process(data_json, function (error, res) {
    if (error) {
        console.log(error);
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(res);
    }
});
