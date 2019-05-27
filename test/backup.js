"use strict";

// const http = require('http');
// // const keepAliveAgent = new http.Agent({ keepAlive: true });
// var options = {
//   schema: 'http',
//   host: '200.113.192.182',
//   port: '8080',
//   headers: {
//     Authorization: 'Basic ' +
//       'YzFiZjBhMjdkNmJiYjIxN2E1OTljOWUyNTQ4MGMxMWQ6b0hycjR0Ym5CMVBIMHV6NlZRTlV2VlZETlZOdmswV2lJWFpXQkFlZDQtQ0JDd2lsVDh5VWRTODdBWm9QcnRxTg==',
//     Accept: 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': 46
//   },
//   path: '/Api/oauth/token',
//   method: 'POST',
//   withCredentials: false
// }
// // options.agent = keepAliveAgent;
// console.log(options);
// var req = http.request(options);
// req.on('error', function (e) {
//     console.log('problem with request: ' + e.message);
//     // cb(e, null);
// });
// req.on('response', function (response) {
//     console.log('Response: ' + response);
//     // cb(e, null);
// });
var moncash = require('../');
require('./configure');

// moncash.generateToken(moncash.configuration, function (error, token) {
//         if (error) {
//             error_callback(error, token);
//         } else {
//             //http_options.headers.Authorization = token;
//             callback();
//         }
//     });
// Get payment by Transaction_id
moncash.capture.get({"transaction_id": "1555945998145"}, function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});

// Get Payment by Order_id
moncash.capture.get({"order_id": "1555952605"}, function (error, capture) {
    if (error) {
        console.error(error);
    } else {
        console.log(capture);
    }
});