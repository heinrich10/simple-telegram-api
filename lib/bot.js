'use strict';

let key;
let baseUrl = 'https://api.telegram.org/bot';
const req = require('./request');

class Bot {
	constructor(apiKey) {
		key = apiKey;
		baseUrl = baseUrl + key;
	}

	* sendMessage(chatId, message) {
		let url = baseUrl + '/sendmessage';
		let form = {
			chat_id: chatId,
			text: message
		}

		try {
			let test = yield req.postAsync(url, {form:form});
			console.log(test.body);
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = Bot;
