<!-- This component is the same as MatchSimpleItemSmall but has images -->

<template>
  <div class="match-simple-item">
      <h3>{{ match_time }}</h3>
      <div>
        <h1>{{ team_home_name }}</h1>
        <h1>[{{ team_home_score }}]</h1>
      </div>
      <img src="https://placeholder.dev-dave.com/blank/256x256/558811" width="100%" height="auto" loading="lazy">
      <h1>VS</h1>
      <img src="https://placeholder.dev-dave.com/blank/256x256/558811" width="100%" height="auto" loading="lazy">
      <div>
        <h1>{{ team_away_name }}</h1>
        <h1>[{{ team_away_score }}]</h1>
      </div>
      <div>
        <a href="">View Match Page</a>
        <a href="">View Stream</a>
      </div>
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