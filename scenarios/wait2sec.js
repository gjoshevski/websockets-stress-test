exports.name = 'Wait 2 sec';

exports.description = 'Simple short test that shows how tests are working';

exports.path = '';



exports.init = function (ws, api) {
	var time = Date.now();
	
    ws.on('message', function (message) {
		var recivedTime = Date.now();
		
		console.log('response time: ' + ( recivedTime- time));
		
		setTimeout(function(str1, str2) {
		  ws.send('{"e":"p", "c":"eventName", "d":{"i":"11"}}');
		  time = Date.now();
		}, 2500);
		
		
    });

    ws.send('{"e":"p", "c":"eventName", "d":{"i":"11"}}');
};
