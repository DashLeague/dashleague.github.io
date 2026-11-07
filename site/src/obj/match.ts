import type { CondensedTeam, TeamMatchOverview } from "./team"
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

export type MatchOverview = {
    match_id: String,
    match_timestamp: Number,
    season: Number,
    cycle: Number,
    forfeit: Boolean,
    playoff: Boolean,
    teams: {
        home: TeamMatchOverview, 
        away: TeamMatchOverview
    }, 
    metadata: {
        vod_link: String
    }
}

export type PlayerMatch = {
    match_id: String,
    season: Number,
    cycle: Number,
    playoff: Boolean,
    rounds: Round[]
}