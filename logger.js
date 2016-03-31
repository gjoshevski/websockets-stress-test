(function() {
    "use strict";

    var winston = require('winston');

    var levels = {
        httpLog: 0,
        wsLog: 1        
    };

    var logger = new (winston.Logger)({
        levels: levels,
        fields:['message','responseTime','url'],
        transports: [
            new winston.transports.File({
                name: 'httpLog',
                level: 'httpLog',
                filename: 'http.log',
                json: true,
                colorize: false
            }),
            new winston.transports.File({
                name: 'wsLog',
                level: 'wsLog',
                filename: 'ws-logs.log',
                json: true,
                colorize: false
            }),
        ]
    });
    
    

    module.exports = logger;


} ());