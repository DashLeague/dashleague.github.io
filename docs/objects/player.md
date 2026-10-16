![DLA min](/docs/images/DLA-min.svg)

# Player Data Objects
This object adheres to the style guide set out [here](/docs/dev/style-guide-json.md)
## Contents
- [Player Data Objects](#player-data-objects)
  - [Contents](#contents)
  - [Full Object](#full-object)
  - [Abstracted Object](#abstracted-object)


## [Full Object](#full-object)
```json
{
    "player_id": "UUIDv4",
    "player_name": "Player",
    "seasons":[
        {
            "season": 0,
            "matches":[
                {
                    "match_id": "UUIDv4",
                    "rounds":[
                        {
                            "map_name": "Map Name",
                            "map_mode": "Game Mode",
                            "team": "Team Name",
                            "stats":{
                                "kills": 0,
                                "kills_per_minute": 0,
                                "deaths": 0,
                                "deaths_per_minute": 0,
                                "kd": 0,
                                "wins": 0,
                                "loss": 0,
                                "playtime": 0,
                                "shots": 0,
                                "shots_hit": 0,
                                "accuracy": 0,
                                "damage": 0,
                                "headshots": 0,
                                "score": 0,
                                "score_per_minute": 0,
                                "payload_push_time": 0,
                                "domination_captures": 0,
                                "domination_counters": 0,
                                "control_point_captures": 0,
                                "terminal_interactions": 0,
                                "terminal_interactions_per_minute": 0
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "aggregated_stats":{
        "kills": 0,
        "kills_per_minute": 0,
        "deaths": 0,
        "deaths_per_minute": 0,
        "kd": 0,
        "wins": 0,
        "loss": 0,
        "playtime": 0,
        "shots": 0,
        "shots_hit": 0,
        "accuracy": 0,
        "damage": 0,
        "headshots": 0,
        "score": 0,
        "score_per_minute": 0,
        "payload_push_time": 0,
        "domination_captures": 0,
        "domination_counters": 0,
        "control_point_captures": 0,
        "terminal_interactions": 0,
        "terminal_interactions_per_minute": 0
    }
}
```

## [Abstracted Object](#abstracted-object)
> [!Note]
The Player object uses a special varient of the match object that only contains data for the specific player
>
> infomation can be found on the [match object documentation](/docs/objects/match.md)
```json
{
    "player_id": "UUIDv4",
    "player_name": "Player",
    "seasons":[
        {
            "season": 0,
            "matches": List Of Player Match Objects
        }
    ],
    "aggregated_stats": Stat Object
}
```