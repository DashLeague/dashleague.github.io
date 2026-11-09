import type { PlayerBasic } from "./player"
import type { SeasonChampionTeam } from "./team"

export type Volunteer = {
    username: string
}

export type SeasonChampions = {
    season_id: number
    dasher?:SeasonChampionTeam
    sprinter?:SeasonChampionTeam
    walker?:SeasonChampionTeam
    mvd?: PlayerBasic
}