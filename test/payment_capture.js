"use strict";

var moncash = require('../');
require('./configure');

// Get payment by Transaction_id
moncash.capture.getByTransactionId("1555945998145", function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});

// Get Payment by Order_id
moncash.capture.getByOrderId("1555952605", function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});