import type { RoundStats, RoundScore } from "./stats"
import type { Map } from "./map"

export type Round = {
    round_id: Number,
    map: Map,
    forfeit: Boolean,
    time: Number,
    results: {
        home: RoundScore,
        away: RoundScore
    },
    stats_home: RoundStats[]
    stats_away: RoundStats[]
}