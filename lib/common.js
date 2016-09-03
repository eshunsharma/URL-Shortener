var newurl = function () {
	var str = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var url = '';
	var charat = 0;

	for(i=0; i<5; i++) {
		charat = Math.random() * str.length;
		url += str[parseInt(charat)];
	}

	return url;
}

module.exports = {
	newurl : newurl
}