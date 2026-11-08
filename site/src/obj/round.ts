import type { RoundStats, RoundScore } from "./stats"
import type { Map } from "./map"

export type Round = {
    round_id: number,
    map: Map,
    forfeit: boolean,
    time: number,
    results: {
        home: RoundScore,
        away: RoundScore
    },
    stats_home: RoundStats[]
    stats_away: RoundStats[]
}