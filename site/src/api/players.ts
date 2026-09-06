// Internal Player API for the website

import { isResponseValidJson } from "./util";

const BASE_URL = import.meta.env.BASE_URL;

// Returns either player data or null
export async function get_player(playerID:string) {
    try {
        // fetch the player json data
        let response = await fetch(
            `/data/players/${encodeURIComponent(playerID)}.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else // could be from using the name insted of player ID
        {
            response = await fetch(
                `/data/lookup/by-name/players.json`
            );
            
            if (!await isResponseValidJson(response)){
                console.error("lookup not found");
                return null;
            }

            const lookup = await response.json();
            
            // change the input variable to be the correct value
            playerID = lookup[playerID] ?? null;

            response = await fetch(
            `/data/players/${encodeURIComponent(playerID)}.json`
            );

            if (!await isResponseValidJson(response)) {
                return null;
            }
            return await response.json();
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}