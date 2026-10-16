![DLA min](/docs/images/DLA.svg)

# Dash League Archive Site Style Guide - Json and Data Objects

## Contents
 1. File Names
 2. Field Naming


## File Names
data objects that are saved to `.json` should ideally use a single noun but when needed a multiple word name should use `kabab-case` and be all lowercase

when an object is a list of other objects it should use a plural version of its noun (eg `player` vs `players`)

Good Examples
```
players.json
player-stats.json
```
Bad Examples
```
player-list.json
Player_stats.json
```

## Field Naming
all fields within a data object should use the `snake_case` convention and be all lowercase

Good Example
```json
{
    "player_id":"abc123",
    "player_name":"Player123"
}
```

Bad Example
- wrong convention
- inconsistent usage
```json
{
    "PlayerID":"abc123",
    "player-name":"Player123"
}
```