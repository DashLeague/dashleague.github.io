export enum Gamemode{
    Unknown,
    Payload,
    Domination,
    ControlPoint,
    Elimination,
    TDM
}

export type SeasonData = {
    season_id: Number
    // stats: OverallStats
    // matches: Array<MatchStatsBasic>
    rounds: Array<RoundStats>
}

export type RoundStats = {
    gamemode: Gamemode,
    kills: number,
    kills_per_minute: number,
    deaths: number,
    deaths_per_minute: number,
    kd: number,
    playtime: number,
    shots: number,
    shots_hit: number,
    accuracy: number,
    damage: number,
    headshots: number,
    score: number,
    score_per_minute: number,
    payload_push_time?: number,
    domination_captures?: number,
    domination_counters?: number,
    control_point_captures?: number,
    terminal_interactions?: number,
    terminal_interactions_per_minute?: number
}