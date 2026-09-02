<template>
  <div class="item">
    <div>
      <h3>{{ team_home_name }}</h3>
      <p>{{ team_home_score }}</p>
      <h3>{{ team_away_name }}</h3>
      <p>{{ team_away_score }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  team_home_id: String,
  team_home_name: String,
  team_home_score: Number,
  team_away_id: String,
  team_away_name: String,
  team_away_score: Number,
})
</script>