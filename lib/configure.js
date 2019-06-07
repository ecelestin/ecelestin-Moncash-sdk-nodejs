/* Copyright 2019 Moncash */
"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;
// var userAgent = exports.userAgent = 'MonCashSDK/nodejs-MonCash-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')';

var default_options = exports.default_options = {
    // 'mode': 'sandbox',
    'schema': 'http',
    'host': '200.113.192.182',
    'port': '8080',
    'redirect_uri': 'http://200.113.192.182:8080/Api/Moncash-middleware',
    "http_content_type_header": "content-type",
    "http_authorization_header": "authorization",
    "http_accept_header": "accept",
    "http_application_json": "application/json",
    "oauth_token_uri": "/oauth/token",
    "payment_creator_uri": "/Api/v1/createpayment",
    "payment_transaction_uri": "/Api/retrivetransactionpayment",
    "payment_order_uri": "/Api/retriveorderpayment",
    "rest_sandbox_endpoint": "200.113.192.182",
    "rest_live_endpoint": "200.113.192.182",
    "sandbox": "sandbox",
    "live": "live",
    "url_key": "url",
    "method_key ": "method",
    // 'openid_connect_schema': 'https',
    // 'openid_connect_host': '200.113.192.182',
    // 'openid_connect_port': '',
    // 'authorize_url': 'http://200.113.192.182:8080/Api/oauth/token', // à enlever
    // 'logout_url': '',
    'headers': {}
};
