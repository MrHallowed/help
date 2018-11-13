// Start Up
const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

	console.log('Bot has restarted and has logged in...');

});

// Auto messages

client.on('message', message => {

	if (message.content === '!ping') {

		message.channel.send('Pong.');

	}

});

client.on('message', message => {

	if (message.content === 'Hello') {

		message.channel.send('Hi.');

	}

});

client.on('message', message => {

	if (message.content === 'Gmod?') {

		message.channel.send('Nah, not at the moment.');

	}

});

client.on('message', message => {

	if (message.content === 'wuu2?') {

		message.channel.send('Not much you?');

	}

});

client.on('message', message => {

	if (message.content === 'gmod?') {

		message.channel.send('Nah, cant be bothered.');

	}

});

client.on('message', message => {

	if (message.content === 'Fortnite') {

		message.channel.send('Crap game');

	}

});

client.on('message', message => {

	if (message.content === 'Rude') {

		message.channel.send('Disrespectful');

	}

});

client.on('message', message => {

	if (message.content === 'Porn') {

    message.channel.send('Fucking lesbian is the best ;)');

	}

});

client.on('message', message => {

	if (message.content === 'How is everyone?') {

		message.channel.send('Im good U?');

	}

});

client.on('message', message => {

	if (message.content === 'Are you sure?') {

		message.channel.send('Of course...');

	}

});

client.on('message', message => {

	if (message.content === 'fuck') {

		message.channel.send('Im English.');

	}

});

client.on('message', message => {

	if (message.content === 'Pussy') {

		message.channel.send('Likin it');

	}

});

client.on('message', message => {

	if (message.content === 'Likin it') {

		message.channel.send('Good Good');

	}

});

client.on('message', message => {

	if (message.content === 'Yo, your already on Gmod!') {

		message.channel.send('Shhhhhhhhhh.');

	}

});

client.on('message', message => {

	if (message.content === 'Goodnight') {

		message.channel.send('Night Night, not creppy.');

	}

});

client.on('message', message => {

	if (message.content === 'Morning') {

		message.channel.send('Good Morning Sir/Maam.');

	}

});

client.on('message', message => {

	if (message.content === 'Shhh') {

		message.channel.send('Quiet, Exam in Progress.');

	}

});

client.on('message', message => {

	if (message.content === 'Im hungry') {

		message.channel.send('Im thirsty.');

	}

});

client.on('message', message => {

	if (message.content === 'Right') {

		message.channel.send('Left.');

	}

});

client.on('message', message => {

	if (message.content === 'Left') {

		message.channel.send('Right.');

	}

});

client.on('message', message => {

	if (message.content === 'Hi') {

		message.channel.send('Hey');

	}

});

client.on('message', message => {

	if (message.content === 'Whats going on') {

		message.channel.send('Not much.');

	}

});

client.on('message', message => {

	if (message.content === 'school') {

		message.channel.send('Return to your learning boi.');

	}

});

client.on('message', message => {

	if (message.content === 'bye') {

		message.channel.send('Goodbye.');

	}

});

client.on('message', message => {

	if (message.content === 'Night') {

		message.channel.send('Cya.');

	}

});

client.on('message', message => {

	if (message.content === 'Dinner') {

		message.channel.send('Thanks, for making me hungry!');

	}

});

client.on('message', message => {

	if (message.content === 'food') {

		message.channel.send('Party Rings cause every day is a party with Party Rings.');

	}

});

client.on('message', message => {

	if (message.content === 'Party Rings') {

		message.channel.send('Yeah, they are fucking brilliant.');

	}

});

client.on('message', message => {

	if (message.content === 'Left') {

		message.channel.send('Right.');

	}

});

client.on('message', message => {

	if (message.content === 'lockdown') {

		message.channel.send('uh oh.');

	}

});

client.on('message', message => {

	if (message.content === 'chicken') {

		message.channel.send('KFC');

	}

});

client.on('message', message => {

	if (message.content === 'KFC') {

		message.channel.send('Happy ;)');

	}

});

client.on('message', message => {

	if (message.content === 'general') {

		message.channel.send('Boring.');

	}

});

client.on('message', message => {

	if (message.content === 'puppy') {

		message.channel.send('Cute');

	}

});

client.on('message', message => {

	if (message.content === 'Security') {

		message.channel.send('Run');

	}

});

client.on('message', message => {

	if (message.content === 'Police') {

		message.channel.send('Selfie time');

	}

});

client.on('message', message => {

	if (message.content === 'and') {

		message.channel.send('so');

	}

});

client.on('message', message => {

	if (message.content === 'bored') {

		message.channel.send('do something.');

	}

});

client.on('message', message => {

	if (message.content === 'secure') {

		message.channel.send('cracked it');

	}

});

client.on('message', message => {

	if (message.content === 'hacked') {

		message.channel.send('Dont hack me :/');

	}

});

client.on('message', message => {

	if (message.content === 'beer pong') {

		message.channel.send('u need beer 1st');

	}

});

// Welcome 

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'member-log');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
  });

// Status

/**

 * The current status of the client. Here are the available statuses:

 * * READY

 * * CONNECTING

 * * RECONNECTING

 * * IDLE

 * * NEARLY

 * * DISCONNECTED

 * @typedef {number} Status

 */

exports.Status = {

	READY: 0,
  
	CONNECTING: 1,
  
	RECONNECTING: 2,
  
	IDLE: 3,
  
	NEARLY: 4,
  
	DISCONNECTED: 5,
  
};

// Bot login + token
client.login('BOT_ID_HERE');
