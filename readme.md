# Simple Telegram Bot API (Under Development)

## Getting Started
Using this api is simple and easy. initialize a bot object, and then call the function you want to do. Use [co](https://github.com/tj/co) for control flow, hence the yield.
``` javascript
var Bot = require('simple-telegram-bot');
var co = require('co');

co(function* () {
    var apiKey = '';
    var bot = new Bot(apiKey);
    yield bot.sendMessage(roomNumber, 'message');
});
```
