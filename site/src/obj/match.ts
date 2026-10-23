import type { CondensedTeam } from "./team"
import type { Round } from "./round"

export type Match = {
    match_id: String,
    season: Number,
    cycle: Number,
    playoff: Boolean,
    forfeit: Boolean,
    invalidated: Boolean,
    match_timestamp: Number
    teams: {
        home: CondensedTeam,
        away: CondensedTeam
    },
    rounds: Round[]
}

export type PlayerMatch = {
    match_id: String,
    season: Number,
    cycle: Number,
    playoff: Boolean,
    rounds: Round[]
}