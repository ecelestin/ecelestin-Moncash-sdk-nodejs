"use strict";

var moncash = require('../');
require('./configure');

// Get Payment by OrderId
moncash.capture.getByOrderId("1559796839", function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});

// Get payment by TransactionId
// moncash.capture.getByTransactionId("123445564454542123", function (error, capture) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(capture);
//     }
// });


