import type {
    SeasonData,
    AggregatedStats
} from "../obj/stats.ts"
import type { MatchOverview, PlayerMatch } from "./match.ts"
import type { CondensedTeam } from "./team.ts"

type PlayerData = {
    player_id: string
    player_name: string
    seasons: Array<SeasonData>
    aggregated_stats: AggregatedStats
}

export type PlayerPageData = {
    player: PlayerBasic
    seasons: PlayerSeason[]
}

export type PlayerSeason = {
    season_id: number
    teams: CondensedTeam[]
    matches: PlayerMatch[]
}

export type PlayerBasic = {
    player_id: string
    player_name: string
    player_robot: string
}