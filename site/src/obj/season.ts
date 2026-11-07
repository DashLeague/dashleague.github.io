import type { MatchOverview } from "./match"

export type Season = {
    season_id: Number
    cycles: Cycle[]
}

export type Cycle = {
    matches: MatchOverview[]
}
