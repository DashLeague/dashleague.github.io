<!-- This component is the same as MatchSimpleItemSmall but has images -->

<template>
  <div class="match-simple-item"
  :style="{
    '--home-color': `#${match.teams.home.team_color}`,
    '--away-color': `#${match.teams.away.team_color}`
  }"
  >
      <h3 class="match-simple-item-date">{{ match_time }}</h3>
      <div class="match-simple-item-home-name">
        <h1>{{ match.teams.home.team_name }}</h1>
        <h1>[{{ match.teams.home.score }}]</h1>
      </div>
      <div class="match-simple-item-teams">
        <div
          class="team-logo"
          :class="{ 'crown': match.teams.home.winner }"
          >
          <img :src="`/assets/team_logos/${match.teams.home.team_id}.png`" width="100%" height="auto" loading="lazy">
        </div>
        <h1>VS</h1>
        <div
          class="team-logo"
          :class="{ 'crown': match.teams.away.winner }"
          >
          <img :src="`/assets/team_logos/${match.teams.away.team_id}.png`" width="100%" height="auto" loading="lazy">
        </div>
      </div>
      <div class="match-simple-item-away-name">
        <h1>{{ match.teams.away.team_name }}</h1>
        <h1>[{{ match.teams.away.score }}]</h1>
      </div>
      <div class="match-simple-item-links">
        <router-link
        :to="`/match/${match.match_id}`"
        :class="{
          full: !match.metadata.vod_link
        }"
        >View Match Page</router-link>
        <a
        v-if="match.metadata.vod_link" 
        :href="match.metadata.vod_link"
        class="Button"
        >View Stream</a>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { MatchOverview } from "@/obj/match.ts"

const props = defineProps<{
    match: MatchOverview
}>();

// *1000 to take it from the miliseconds timestamps js and ts normally use to seconds
const match_time = new Date(props.match.match_timestamp*1000).toLocaleString();
</script>