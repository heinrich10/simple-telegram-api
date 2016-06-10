'use strict';

const Bot = require('../lib/bot');
const co = require('co');
/*
co(function* () {
	let form = {
		chat_id: 165838745,
		text: 'fuck you'
	}
	let url = 'https://api.telegram.org/bot228208142:AAG0qpLjeTZffKGHlDoEZb3CizSucv30UYc/sendMessage';
	try {
		let test = yield req.postAsync(url, {form:form});
	} catch (e) {
		console.log(e);
	}
	console.log(test);
});
*/
co(function* () {
	let apiKey = '228208142:AAG0qpLjeTZffKGHlDoEZb3CizSucv30UYc';
	let bot = new Bot(apiKey);
	yield bot.sendMessage(133003631, 'this is a test');
});
