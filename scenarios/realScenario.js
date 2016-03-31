(function() {
    "use strict";

    exports.name = 'Simualte app user';
    exports.description = 'App user with http requests and sockets';
    exports.path = '/scenarios/realScenario.js';

    var http = require('http');
    var https = require('https');
    
   

    var logger = require('../logger.js');

    //settings for test
    var socketResponseTime = 2500;
    var httpRequests = [
       /* {
            host: 'google.com',
            protocol: 'http:',
            path: '/',
            port: '80',
            headers: { 'custom': 'test' }
        }
        ,
        {
            host: 'api.makelightapp.co',
            protocol: 'https:',
            path: '/api/event/content/evelon646746/light?seat=A1',
            port: '443',
            headers: { 'custom': 'test' }
        }*/
    ];

    /*
    * Function called after ws.open
    */
    exports.init = function(ws, api) {
        
        var sockId = Date.now();
        var time = Date.now();

        ws.on('message', function(message) {
            var recivedTime = Date.now();
            console.log(message);
            console.log('response time: ' + (recivedTime - time));
            logger.wsLog(
                {
                    "message": "Response time: " + (Date.now() - time),
                    "responseTime": (Date.now() - time)
                }
            );
           
                
            setTimeout(function(str1, str2) {
                ws.send('{"e":"p", "c":"testes361126", "d":{"i":"11"}}');
                time = Date.now();
            }, socketResponseTime);
           

        });

        ws.send('{"e": "s:s", "d": {"c": "testes361126", "id": "'+sockId+'"}}');


    };




    exports.executeHTTPRequests = function(callback) {

        httpRequests.forEach(function(options, index) {
            var time, diffTime;
            time = Date.now();
            var _this = this;

            var req = (options.protocol === 'http:' ? (http) : (https)).request(options, function(response) {
                var str = '';
                response.on('data', function(chunk) {
                    str += chunk;
                });

                response.on('end', function() {
                    //  console.log(str);
                });

                  console.log(options.protocol + " response time: " + (Date.now() - time));
                logger.httpLog(
                    {
                        "message": "Response time: " + (Date.now() - time),
                        "responseTime": (Date.now() - time),
                        "url": options.host + options.path
                    }
                );
            });

            req.end();

        }, this);

        if (callback) {
            callback();
        }


    };


} ());
