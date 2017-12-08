# discord-rich-presence

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
