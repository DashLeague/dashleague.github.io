![DLA min](/docs/images/DLA.svg)

# Player Data Objects
This object adheres to the style guide set out [here](/docs/dev/style-guide-json.md)
## Contents
- [Player Data Objects](#player-data-objects)
  - [Contents](#contents)
  - [Full Object](#full-object)
  - [Abstracted Object](#abstracted-object)
  - [Player Varient Object](#player-varient-object)


## Full Object
```json
{
    "match_id": "UUIDv4",
    "season": 9,
    "cycle": 1,
    "playoff": false,
    "forfeit": false,
    "invalidated": false,
    "teams":{
        "home":{
            "team_id": "UUIDv4",
            "team_name": "HOME",
        },
        "away":{
            "team_id": "UUIDv4",
            "team_name": "AWAY",
        }
    },
    "rounds":[
        {
            "round_id": 0,
            "map":{
                "name": "Map Name",
                "mode": "Game Mode"
            },
            "forfeit": false,
            "time": 709,
            "results":{
                "home":{
                    "team_id": "UUIDv4",
                    "team_name": "HOME",
                    "score": 0,
                    "time": 0,
                    "winner": false
                },
                "away":{
                    "team_id": "UUIDv4",
                    "team_name": "AWAY",
                    "score": 0,
                    "time": 0,
                    "winner": false
                }
            },
            "stats_home":[
                {
                    "player_id": "UUIDv4",
                    "player_name": "Player Name",
                    "kills": 0,
                    "deaths": 0,
                    "kd": 0.0,
                    "shots": 0,
                    "shots_hit": 0,
                    "accuracy": 0.0,
                    "damage": 0,
                    "headshots": 0,
                    "score": 0,
                    "cp_captures": 0,
                    "ctf_captures": 0,
                    "ctf_returns": 0,
                    "payload_pushtime": 2,
                    "dom_captures": 0,
                    "dom_counters": 0
                },
                ... Object Per Player
            ],
            "stats_away":[
                {
                    "player_id": "UUIDv4",
                    "player_name": "Player Name",
                    "kills": 0,
                    "deaths": 0,
                    "kd": 0.0,
                    "shots": 0,
                    "shots_hit": 0,
                    "accuracy": 0.0,
                    "damage": 0,
                    "headshots": 0,
                    "score": 0,
                    "cp_captures": 0,
                    "ctf_captures": 0,
                    "ctf_returns": 0,
                    "payload_pushtime": 2,
                    "dom_captures": 0,
                    "dom_counters": 0
                },
                ... Object Per Player
            ]
        }
    ]
}
```

## Abstracted Object
```json
{
    "match_id": "UUIDv4",
    "season": 9,
    "cycle": 1,
    "playoff": false,
    "forfeit": false,
    "invalidated": false,
    "teams":{
        "home": Condensed Team Object,
        "away": Condensed Team Object
    },
    "rounds": List of Round Objects
}
```

## Player Varient Object
This is the varient to be used for player related infomation

```json
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
```