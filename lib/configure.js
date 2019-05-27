/* Copyright 2019 Moncash, Inc. */
"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;
// var userAgent = exports.userAgent = 'MonCashSDK/nodejs-MonCash-SDK ' + sdkVersion + ' (node ' + process.version + '-' + process.arch + '-' + process.platform  + '; OpenSSL ' + process.versions.openssl + ')';

var default_options = exports.default_options = {
    'mode': 'sandbox',
    'schema': 'http',
    'host': '200.113.192.182',
    'port': '8080',
    'openid_connect_schema': 'https',
    'openid_connect_host': '200.113.192.182',
    'openid_connect_port': '',
    'authorize_url': 'http://200.113.192.182:8080/Api/oauth/token', // à enlever
    'logout_url': '',
    'headers': {}
};
