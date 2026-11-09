import type {
    SeasonData,
    AggregatedStats
} from "../obj/stats.ts"

type PlayerData = {
    player_id: string
    player_name: string
    seasons: Array<SeasonData>
    aggregated_stats: AggregatedStats
}

export type PlayerBasic = {
    player_id: string
    player_name: string
}