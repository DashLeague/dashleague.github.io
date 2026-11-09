// Internal API for miscellaneous stuff on the website
import type { SeasonChampions, Volunteer } from "@/obj/misc.ts"
import { isResponseValidJson } from "./util";
import type { Season } from "@/obj/season";

const BASE_URL = import.meta.env.BASE_URL;

export async function get_volunteers(): Promise<Volunteer[]|null> {
        console.log(`GET VOLUNTEERS`)
    try {
        // fetch the volunteers json data
        let response = await fetch(
            `/data/misc/volunteers.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else {
            return null; // volunteers not found
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}

export async function get_seasons(): Promise<Season[]|null> {
    try {
        // fetch the seasons json data
        let response = await fetch(
            `/data/lookup/seasons.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else {
            return null; // seasons not found
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}

export async function get_hall_of_champions(): Promise<SeasonChampions[]|null> {
    try {
        // fetch the seasons json data
        let response = await fetch(
            `/data/misc/champions.json`
        );

        if (await isResponseValidJson(response)) {
            return await response.json();
        }
        else {
            return null; // seasons not found
        }
    } catch (error){
        console.error("err:", error);
        return null;
    }
}