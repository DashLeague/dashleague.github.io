export type CondensedTeam = {
    team_id: String,
    team_name: String,
    team_color: String
}

export type TeamMatchOverview = {
    team_id: String,
    team_name: String,
    team_color: String,
    score: Number,
    winner: Boolean
}