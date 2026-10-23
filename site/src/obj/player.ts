import type {
    SeasonData,
    AggregatedStats
} from "../obj/stats.ts"

type PlayerData = {
    player_id: String
    player_name: String
    seasons: Array<SeasonData>
    aggregated_stats: AggregatedStats
}