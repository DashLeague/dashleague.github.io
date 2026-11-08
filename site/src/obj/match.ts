import type { CondensedTeam, TeamMatchOverview } from "./team"
import type { Round } from "./round"

export type Match = {
    match_id: string,
    season: number,
    cycle: number,
    playoff: boolean,
    forfeit: boolean,
    invalidated: boolean,
    match_timestamp: number
    teams: {
        home: CondensedTeam,
        away: CondensedTeam
    },
    rounds: Round[]
}

export type MatchOverview = {
    match_id: string,
    match_timestamp: number,
    season: number,
    cycle: number,
    forfeit: boolean,
    playoff: boolean,
    teams: {
        home: TeamMatchOverview, 
        away: TeamMatchOverview
    }, 
    metadata: {
        vod_link: string
    }
}

export type PlayerMatch = {
    match_id: string,
    season: number,
    cycle: number,
    playoff: boolean,
    rounds: Round[]
}