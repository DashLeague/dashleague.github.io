// Internal Player API for the website

import type { SeasonTeamList } from "@/obj/team";
import { isResponseValidJson } from "./util";

const BASE_URL = import.meta.env.BASE_URL;

// Returns either team data or null
export async function get_team(TeamID:string) {
    try {
        // fetch the team json data
        let response = await fetch(
            `/data/teams/${encodeURIComponent(TeamID)}.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else // could be from using the name insted of team ID
        {
            response = await fetch(
                `/data/lookup/by-name/teams.json`
            );
            
            if (!await isResponseValidJson(response)){
                console.error("lookup not found");
                return null;
            }

            const lookup = await response.json();
            
            // change the input variable to be the correct value
            TeamID = lookup[TeamID] ?? null;

            response = await fetch(
            `/data/teams/${encodeURIComponent(TeamID)}.json`
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

// Returns either team data or null
export async function get_teams(season:number): Promise<SeasonTeamList | null> {
    console.log(`GET TEAMS ${season}`)
    try {
        // fetch the seasons teams json data
        let response = await fetch(
            `/data/teams/s${encodeURIComponent(season)}_index.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else {
            return null; // Teams for specified season not found
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}