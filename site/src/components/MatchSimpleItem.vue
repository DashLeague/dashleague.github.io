<!-- This component is the same as MatchSimpleItemSmall but has images -->

<template>
  <div class="match-simple-item"
  :style="{
    '--home-color': `#${team_home_color}`,
    '--away-color': `#${team_away_color}`
  }"
  >
      <h3 class="match-simple-item-date">{{ match_time }}</h3>
      <div class="match-simple-item-home-name">
        <h1>{{ team_home_name }}</h1>
        <h1>[{{ team_home_score }}]</h1>
      </div>
      <div class="match-simple-item-teams">
        <div
          class="team-logo"
          :class="{ 'crown': team_home_winner }"
          >
          <img :src="`/assets/team_logos/${team_home_id}.png`" width="100%" height="auto" loading="lazy">
        </div>
        <h1>VS</h1>
        <div
          class="team-logo"
          :class="{ 'crown': team_away_winner }"
          >
          <img :src="`/assets/team_logos/${team_away_id}.png`" width="100%" height="auto" loading="lazy">
        </div>
      </div>
      <div class="match-simple-item-away-name">
        <h1>{{ team_away_name }}</h1>
        <h1>[{{ team_away_score }}]</h1>
      </div>
      <div class="match-simple-item-links">
        <router-link
        :to="`/match/${match_id}`"
        :class="{
          full: !match_vod_link
        }"
        >View Match Page</router-link>
        <a
        v-if="match_vod_link" 
        :href="match_vod_link"
        class="Button"
        >View Stream</a>
      </div>
  </div>
</template>

<script setup>
const props = defineProps({
  match_id: String,
  team_home_id: String,
  team_home_name: String,
  team_home_score: Number,
  team_home_winner: Boolean,
  team_home_color: String,

  team_away_id: String,
  team_away_name: String,
  team_away_score: Number,
  team_away_winner: Boolean,
  team_away_color: String,
  
  match_timestamp: Number,
  match_vod_link: String
})

// *1000 to take it from the miliseconds timestamps js and ts normally use to seconds
const match_time = new Date(props.match_timestamp*1000).toLocaleString();
</script>