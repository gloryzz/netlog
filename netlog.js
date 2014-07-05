var page = require('webpage').create(),
	system = require('system'),
	address;

if (system.args.length === 1) {
	console.log('Usage: netlog.js <some URL>');
	phantom.exit(1);
}
else {
	address = system.args[1];

	page.onResourceRequested = function (req) {
		var url_str = JSON.stringify(req["url"], undefined, 4).split(":")[1];
		var domain_str = url_str.split("/")[2];
		if (domain_str != "" && domain_str.indexOf("naver.com") == -1 && domain_str.indexOf("naver.net") == -1)
			console.log(domain_str);
	};

	page.open(address, function (status) {
		if (status !== 'success') {
			console.log('FAIL to load the address');
		}
		phantom.exit();
	});
}
