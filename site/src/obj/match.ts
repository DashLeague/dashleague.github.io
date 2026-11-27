import type { CondensedTeam, MatchTeams, TeamMatchOverview } from "./team"
import type { PlayerRound, Round } from "./round"

export type Match = {
    match_id: string,
    season: number,
    cycle: number,
    playoff: boolean,
    forfeit: boolean,
    invalidated: boolean,
    match_timestamp: number
    teams: MatchTeams
    rounds: Round[]
    metadata: MatchMetadata
}

export type MatchOverview = {
    match_id: string,
    match_timestamp: number,
    season: number,
    cycle: number,
    forfeit: boolean,
    playoff: boolean,
    teams: MatchTeams,
    metadata: MatchMetadata
}

export type PlayerMatch = {
    match_id: string
    match_timestamp: number
    season: number
    cycle: number
    playoff: boolean
    rounds: PlayerRound[]
    teams: MatchTeams
    metadata: MatchMetadata
}

export type MatchMetadata = {
    vod_link?: string
}