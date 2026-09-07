<!-- This component is the same as MatchSimpleItem but has no images -->
<template>
  <div class="match-simple-item">
      <h3>{{ match_time }}</h3>
      <h3>{{ team_home_name }}</h3>
      <p>{{ team_home_score }}</p>
      <h3>{{ team_away_name }}</h3>
      <p>{{ team_away_score }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  team_home_id: String,
  team_home_name: String,
  team_home_score: Number,
  team_away_id: String,
  team_away_name: String,
  team_away_score: Number,
  match_timestamp: Number
})

// *1000 to take it from the miliseconds timestamps js and ts normally use to seconds
const match_time = new Date(props.match_timestamp*1000).toLocaleString();
</script>