<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/bRCvFy9"><img src="https://discordapp.com/api/guilds/222078108977594368/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord-rich-presence"><img src="https://img.shields.io/npm/v/discord-rich-presence.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-rich-presence"><img src="https://img.shields.io/npm/dt/discord-rich-presence.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/devsnek/discord-rich-presence"><img src="https://img.shields.io/david/devsnek/discord-rich-presence.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/devsnek"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/discord-rich-presence/"><img src="https://nodei.co/npm/discord-rich-presence.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Discord Rich Presence

A simple wrapper around [discord-rpc](https://npmjs.org/discord-rpc)

### Example

```javascript
const client = require('discord-rich-presence')('180984871685062656');

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '1337')
    client.reply(user, 'YES');
  else
    client.reply(user, 'IGNORE');
});

client.on('connected', () => {
  console.log('connected!');

  client.updatePresence({
    state: 'slithering',
    details: '🐍',
    startTimestamp: Date.now(),
    endTimestamp: Date.now() + 1337,
    largeImageKey: 'snek_large',
    smallImageKey: 'snek_small',
    partyId: 'snek_party',
    partySize: 1,
    partyMax: 1,
    matchSecret: 'slithers',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
    instance: true,
  });
});
```
