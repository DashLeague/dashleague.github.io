![DLA min](/docs/images/DLA.svg)

# Player Data Objects
This object adheres to the style guide set out [here](/docs/dev/style-guide-json.md)
## Contents
- [Player Data Objects](#player-data-objects)
  - [Contents](#contents)
  - [Full Object](#full-object)
  - [Abstracted Object](#abstracted-object)


## Full Object
```json
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
```

## Abstracted Object
```json
{
    "round_id": 0,
    "map": Map Object,
    "forfeit": false,
    "time": 0,
    "results":{
        "home": Round Score Team Object,
        "away": Round Score Team Object
    },
    "stats_home": List of Round Stats Player Objects,
    "stats_away": List of Round Stats Player Objects
}
```