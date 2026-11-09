import type { PlayerBasic } from "./player"

export type CondensedTeam = {
    team_id: string
    team_name: string
    team_color: string
}

export type SeasonChampionTeam = {
    team: CondensedTeam
    players: PlayerBasic[]
}

export type TeamMatchOverview = {
    team_id: string
    team_name: string
    team_color: string
    score: number
    winner: boolean
}