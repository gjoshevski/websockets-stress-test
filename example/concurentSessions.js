exports.name = 'Wait 2 sec';

exports.description = 'Simple short test that shows how tests are working';

exports.path = '';



exports.init = function (ws, api) {
	var time = Date.now();
	
    ws.on('message', function (message) {		
		//wait 10 min then close
		setTimeout(function(str1, str2) {
		   ws.close();
		}, 10*60*1000);
		
		
    });

    ws.send('{"e":"p", "c":"eventName", "d":{"i":"11"}}');
};
