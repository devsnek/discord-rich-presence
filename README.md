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

client.updatePresence({
  state: 'slithering',
  details: '🐍',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  instance: true,
});
```

In browser you can import/require it as `discord-rich-presence/browser`.
However, it should be noted that currently using rich presence in browser is
a feature whitelisted by Discord, and you will most likely be unable to use it.
