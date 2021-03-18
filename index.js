const tmi = require('tmi.js');
var fs = require('fs');

const client = new tmi.Client({
	connection: { reconnect: true },
	channels: [ 'channel1','channel2' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// console.log,
	console.log(`${tags.username}: ${message}`);
	//Time
	var date = new Date().toLocaleTimeString();
	//Better Channel Name
	var channelName = channel.replace("#","")
  	//log.txt
  	fs.appendFileSync(`chat-log.txt`, `[${channelName}] - [${date}] ${tags.username}: ${message}\n`);
});
