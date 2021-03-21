export = makeClient;
declare function makeClient(clientId: any): {
    updatePresence(d: any): void;
    reply(user: any, response: any): void;
    disconnect(): void;
};
