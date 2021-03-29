/**
 * ### [Discord Rich Presence](https://www.npmjs.com/package/discord-rich-presence)
 * A simple wrapper around [discord-rpc](https://www.npmjs.com/discord-rpc)  
 * Type declarations by [@Sv443](https://github.com/Sv443)
 * @author devsnek
 */
declare module "discord-rich-presence"
{
    import EventEmitter from "events";

    /**
     * Go to the `Rich Presence > Visualizer` settings of your [Discord application](https://discord.com/developers/applications) to find out how this would be rendered.
     */
    export interface IPresenceInfo
    {
        [index: string]: (string | number | boolean);

        /** The user's current party status */
        state: string;
        /** What the player is currently doing */
        details: string;
        /** Epoch seconds for game start - setting this will show the time as "elapsed" */
        startTimestamp: number;
        /** Epoch seconds until game's end - setting this will show the time as "remaining" */
        endTimestamp: number;
        /** Key of the uploaded image / asset for the large profile artwork */
        largeImageKey: string;
        /** Key of the uploaded image / asset for the small profile artwork */
        smallImageKey: string;

        instance: boolean;
    }

    interface RP
    {
        on(event: "error", listener: (err: string) => void): this;
        on(event: "connected", listener: () => void): this;
        on(event: "join", listener: (secret: string) => void): this;
        on(event: "spectate", listener: (secret: string) => void): this;
        on(event: "joinRequest", listener: (user: string) => void): this;
    }

    class RP extends EventEmitter
    {
        /**
         * Updates the presence
         * @param presence Presence settings object. All properties are optional.
         */
        updatePresence(presence: Partial<IPresenceInfo>): void;

        reply(user: string, response: ("YES" | "NO" | "IGNORE")): void;
        disconnect(): void;
    }

    /**
     * Connects to your application
     * @param clientID Get the client ID from the `General Information` page of your [Discord application](https://discord.com/developers/applications)
     */
    export default function createClient(clientID: string): RP;
}
