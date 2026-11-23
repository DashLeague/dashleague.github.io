<template>
  <!-- Header -->
  <div
  class="match-head"
  :style="{
    '--home-color': `#${matchData?.teams.home.team_color}`,
    '--away-color': `#${matchData?.teams.away.team_color}`
  }"
  >
    <span class="team-colors"
    ></span>
      <div
        class="team-logo"
        :class="{ 'crown': matchData?.teams.home.winner }"
        >
        <img :src="`/assets/team_logos/${matchData?.teams.home.team_id}.png`" width="100%" height="auto" loading="lazy">
      </div>
      <h1>VS</h1>
      <div
        class="team-logo"
        :class="{ 'crown': matchData?.teams.away.winner }"
        >
        <img :src="`/assets/team_logos/${matchData?.teams.away.team_id}.png`" width="100%" height="auto" loading="lazy">
      </div>
  </div>
  <!-- Rounds -->
    <MatchRound
    v-if="matchData"
    v-for="round in matchData.rounds"
    :round="round"
    :teams="matchData.teams"
    />

    <div v-if="matchData">
        <!-- <pre>{{ matchData }}</pre> -->
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
  matchID: {
    type: String,
    required: true
  }
})

import { ref, onMounted } from 'vue'
import { get_match } from "../api/matches.ts";
import { useRouter } from 'vue-router'
import { Gamemode } from '@/obj/common.ts';

import MapStatBlock from '../components/MapStatBlock.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import MapStatBlockCondensed from '@/components/MapStatBlockCondensed.vue';
import type { Match } from '@/obj/match.ts';
import MatchRound from '@/components/MatchRound.vue';


const router = useRouter()
console.log(props.matchID);
const condensed_data = ref(false);
const matchData = ref<Match | null>(null);
onMounted(async () => {
  console.log(props.matchID);

  const data = await get_match(props.matchID);
  
  if (!data){
    router.replace('/404');
  }
  
  matchData.value = data;
  document.title = `${data?.teams.home.team_name} VS ${data?.teams.away.team_name} | Season ${data?.season} C${data?.cycle}`
})
</script>