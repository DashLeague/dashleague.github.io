<template>
  <div>
    <Item
      v-for="item in items"
      :key="item.id"
      :team_home_id="item.team_home_id"
      :team_home_name="item.team_home_name"
      :team_home_score="item.team_home_score"
      :team_away_id="item.team_away_id"
      :team_away_name="item.team_away_name"
      :team_away_score="item.team_away_score"
    />
  </div>
</template>

<script setup>
import Item from '../components/MatchSimpleItem.vue'

const items = [
  {
    id: 1,
    team_home_id: "123xyz",
    team_home_name: "Team A",
    team_home_score: 1,
    team_away_id: "123xyz",
    team_away_name: "Team B",
    team_away_score: 1
  },
  {
    id: 2,
    team_home_id: "123xyz",
    team_home_name: "Team A",
    team_home_score: 1,
    team_away_id: "123xyz",
    team_away_name: "Team B",
    team_away_score: 1
  },
    {
    id: 3,
    team_home_id: "123xyz",
    team_home_name: "Team A",
    team_home_score: 1,
    team_away_id: "123xyz",
    team_away_name: "Team B",
    team_away_score: 1
  },
]
</script>