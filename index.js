const tmi = require('tmi.js');
var fs = require('fs');

const client = new tmi.Client({
	connection: { reconnect: true },
	channels: [ 'videoyun','peginium' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	//Time
	var date = new Date().toLocaleTimeString();
	//Better Channel Name
	var channelName = channel.replace("#","")
	// console.log,
	console.log(`[${channelName}] - [${date}] ${tags.username}: ${message}`);
  	//log.txt
  	fs.appendFileSync(`chat-log.txt`, `[${channelName}] - [${date}] ${tags.username}: ${message}\n`);
});
