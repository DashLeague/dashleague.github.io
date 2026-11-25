<template>
  <!-- Header -->
  <div
  class="match-head"
  :style="{
    '--home-color': `#${matchData?.teams.home.team_color}`,
    '--away-color': `#${matchData?.teams.away.team_color}`
  }"
  >
    <span class="team-colors"></span>
    <div class="team-verses">
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
    <h3>{{match_time?.toLocaleString()}}</h3>
  </div>
  <!-- Rounds -->
    <MatchRound
    v-if="matchData"
    v-for="round in matchData.rounds"
    :round="round"
    :teams="matchData.teams"
    />

  <!-- Stream -->
  <div
  v-if="matchData?.metadata?.vod_link"
  class="match-stream">
    <h1>Watch the stream</h1>
    <iframe
    :src="matchData.metadata.vod_link"
    :title="`Dash Legaue | ${matchData.teams.home.team_name} VS ${matchData.teams.away.team_name} | Season ${matchData.season} Cycle ${matchData.cycle}`"
    allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
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
const match_time = ref<Date | null>();

onMounted(async () => {
  console.log(props.matchID);

  const data = await get_match(props.matchID);
  
  if (!data){
    router.replace('/404');
  }
  
  matchData.value = data;
  match_time.value = new Date((data?.match_timestamp??0)*1000);
  document.title = `${data?.teams.home.team_name} VS ${data?.teams.away.team_name} | Season ${data?.season} C${data?.cycle}`
})
</script>