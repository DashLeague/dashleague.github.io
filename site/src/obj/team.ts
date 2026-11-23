import type { MatchOverview } from "./match"
import type { PlayerBasic } from "./player"

export type CondensedTeam = {
    team_id: string
    team_name: string
    team_color: string
}

export type MatchTeams = {
    home: TeamMatchOverview, 
    away: TeamMatchOverview
}

export type SeasonChampionTeam = {
    team: CondensedTeam
    players: PlayerBasic[]
}

export type SeasonTeamList = {
    dasher?: CondensedTeam[]
    sprinter?: CondensedTeam[]
    walker?: CondensedTeam[]
}

export type TeamMatchOverview = {
    team_id: string
    team_name: string
    team_color: string
    score: number
    winner: boolean
}

export type TeamPageData = {
    team: CondensedTeam
    seasons: TeamSeason[]
}

export type TeamSeason = {
    season_id: number
    players: PlayerBasic[]
    matches: MatchOverview[]
}