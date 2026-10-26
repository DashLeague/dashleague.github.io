// Internal API for miscellaneous stuff on the website
import type { Volunteer } from "@/obj/misc.ts"
import { isResponseValidJson } from "./util";

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