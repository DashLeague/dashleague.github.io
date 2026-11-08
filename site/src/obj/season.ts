import type { MatchOverview } from "./match"

export type Season = {
    season_id: number
    cycles: Cycle[]
}

export type Cycle = {
    cycle_id: number
    matches: MatchOverview[]
}
