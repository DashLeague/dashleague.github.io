import {type RoundStats, type SeasonData} from "../obj/stats.ts"

type PlayerData = {
    id: String
    name: String
    // overall_stats: Stats
    maps: Array<RoundStats>
    seasons: Array<SeasonData>

}