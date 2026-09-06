// Internal Match API for the website

import { isResponseValidJson } from "./util";

const BASE_URL = import.meta.env.BASE_URL;

// Returns either match overview data or null
export async function get_matches(season:number) {
    console.log(`GET MATCHES ${season}`)
    try {
        // fetch the seasons matches overview json data
        let response = await fetch(
            `/data/matches/s${encodeURIComponent(season)}/matches.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else {
            return null; // Matches for specified season not found
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}