# MonCash REST SDK

This is the NodeJs SDK that allows nodejs developers to interract with the MonCash payment facility on their website.

## Installation

```sh
npm install --save https://github.com/ecelestin/ecelestin-Moncash-sdk-nodejs
```
Or

* Download the package and execute this command line

```sh
npm install ./nodejs-moncash-sdk
```


## Usage
To write an app using the SDK

  * Register for a developer account and get your client_id and secret at [MonCash Developer Digicel Portal].
  * Add dependency 'nodejs-moncash-sdk' in your package.json file.
  * Require 'nodejs-moncash-sdk' in your file


```javascript

    var moncash = require('nodejs-moncash-sdk');
```

  * Create config options, with parameters (mode, client_id, secret).


```javascript

    moncash.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': 'BBWKjlBLKMYqRNQ6sYvFo64FtaRLRR5BdHBBSmha49TM',
        'client_secret': 'BO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHBBSmha49TM'
    });
```

  * Invoke the rest api (eg: create a Moncash payment) with required parameters (eg: data, config_options, callback).


```javascript 

    var create_payment_json = {
        "amount": 50,
        "orderId": "123445564454542123"
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
```

  * Capture payment using transactionId or OrderId.

```javascript 

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
```

  * For creating Payments, check out the [test](/test/payment_creator.js).

  * To capture or search payment by transactionId or OrderId check out the [test](/test/payment_capture.js).

## Testing

```sh
    node test/payment_creator.js
```

```sh
    node test/payment_capture.js
```

## Security

If you discover any security related issues, please email suyeasdras@gmail.com instead of using the issue tracker.

## Credits

* [Esdras SUY][http://www.linkedin.com/in/esdras-suy-412660a4].
* [Emmanuel SUY][http://www.linkedin.com/in/emmanuel-suy-11474277].

## License

To be filled by MonCash