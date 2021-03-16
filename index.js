const tmi = require('tmi.js');
var fs = require('fs');

const client = new tmi.Client({
	connection: { reconnect: true },
	channels: [ 'channelname' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// console.log,
	console.log(`${tags.username}: ${message}`);

  //log.txt
  fs.appendFileSync("log.txt", `${tags.username}: ${message}\n`);
});