/* Copyright 2019 Moncash */
"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;
// var userAgent = exports.userAgent = 'MonCashSDK/nodejs-MonCash-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')';

var default_options = exports.default_options = {
    'schema': 'https',
    'host': '...', // default host to put.
    // 'port': '8080',
    'sandbox_redirect_uri': 'http://sandbox.moncashbutton.digicelgroup.com/Moncash-middleware',
    'live_redirect_uri': "http://moncashbutton.digicelgroup.com/Moncash-middleware",
    "http_content_type_header": "Content-Type",
    "http_authorization_header": "Authorization",
    "http_accept_header": "Accept",
    "http_application_json": "application/json",
    "oauth_token_uri": "/Api/oauth/token",
    "payment_creator_uri": "/Api/v1/CreatePayment",
    "payment_transaction_uri": "/Api/v1/RetrieveTransactionPayment",
    "payment_order_uri": "/Api/v1/RetrieveOrderPayment",
    "rest_sandbox_endpoint": "sandbox.moncashbutton.digicelgroup.com",
    "rest_live_endpoint": "moncashbutton.digicelgroup.com",
    "sandbox": "sandbox",
    "live": "live",
    "url_key": "url",
    "method_key ": "method",
    'headers': {}
};
