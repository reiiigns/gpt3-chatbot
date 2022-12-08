const openai = require('openai');
const Twitch = require('twitch-js');
var TwitchJs = require('twitch-js')

openai.apiKey = 'process.env.OPENAI_SECRET_KEY';

function generateResponse(prompt) {
    return openai.completions
        .create({
            prompt: prompt,
            model: 'text-davinci-002',
            max_tokens: 1024,
            temperature: 0.5,
        })
        .then((response) => response.choices[0].text);
}
    ({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
      username: 'process.env.TWITCH_USERNAME',
      password: 'process.env.TWITCH_OAUTH_TOKEN',
  },
      channels: ['reiiigns']
});

chat.on('message', (channel, userstate, message, self) => {
    if (self) return;

    generateResponse(message).then((response) => {
        chat.say(channel, response);
    });
})();
chat.on(chatConstants.EVENTS.WHISPER, (from, userstate, message, self) => {
    if (self) return;

    if (message === '!invite') {
        chat.whisper(from, `/invite ${from}`);
    }
});
