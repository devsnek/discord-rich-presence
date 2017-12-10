const Discord = require('discord-rpc');
const EventEmitter = require('events');
const browser = typeof window !== 'undefined';

function makeClient(id) {
  const rpc = new Discord.Client({ transport: browser ? 'websocket' : 'ipc' });

  let connected = false;
  let activityCache = null;

  const instance = new class RP extends EventEmitter {
    updatePresence(d) {
      if (connected)
        rpc.setActivity(d).catch((e) => this.emit('error', e));
      else
        activityCache = d;
    }

    reply(user, response) {
      const handle = (e) => this.emit('error', e);
      switch (response) {
        case 'YES':
          rpc.sendJoinInvite(user).catch(handle);
          break;
        case 'NO':
        case 'IGNORE':
          rpc.closeJoinRequest(user).catch(handle);
      }
    }

    disconnect() {
      rpc.destroy().catch((e) => this.emit('error', e));
    }
  };

  rpc.login(id)
    .then(() => {
      instance.emit('connected');
      connected = true;
      if (activityCache) {
        rpc.setActivity(activityCache).catch((e) => instance.emit('error', e));
        activityCache = null;
      }
      rpc.subscribe('ACTIVITY_JOIN', ({ secret }) => {
        instance.emit('join', secret);
      });
      rpc.subscribe('ACTIVITY_SPECTATE', ({ secret }) => {
        instance.emit('spectate', secret);
      });
      rpc.subscribe('ACTIVITY_JOIN_REQUEST', (user) => {
        instance.emit('joinRequest', user);
      });
    })
    .catch((e) => instance.emit('error', e));

  return instance;
}

module.exports = makeClient;
