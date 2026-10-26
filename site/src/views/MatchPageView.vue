<template>
  
  <!-- Header -->
  <div class="match-head">

  </div>
  <!-- Rounds -->
  <div
  class="match-map"
  v-if="matchData"
  v-for="round in matchData.rounds"
  >
  <div class="match-map-stats">
    <div class="match-map-stats-team">
      <div class="match-map-stats-head" style="background-color: var(--HD-red);">
          <p>{{matchData.teams.home.team_name}}</p>
          <p
          v-if="round.map.mode == Gamemode.Payload"
          >{{SecondsToStamp(round.results.home.time)}}</p>
          <p
          v-if="round.map.mode == Gamemode.Payload"
          >{{round.results.home.score / 100.0}}%</p>
          <p
          v-else
          >{{round.results.home.score}}</p>
      </div>
      <table class="match-map-stats-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>kills</th>
            <th>deaths</th>
            <th>kd</th>
            <th>shots</th>
            <th>headshots</th>
            <th>score</th>
            <th
            v-if="round.map.mode == Gamemode.Payload"
            >Time On Cart</th>
            <th
            v-if="round.map.mode == Gamemode.Domination || round.map.mode == Gamemode.ControlPoint"
            >Captures</th>
            <th
            v-if="round.map.mode == Gamemode.Domination"
            >Counters</th>

          </tr>
        </thead>
        <tbody>
          <MapStatBlock
          v-for="stats in round.stats_home"
          :stats="stats"
          :gamemode="round.map.mode"
          />
        </tbody>
      </table>
    </div>
    <div class="match-map-stats-team">
      <div class="match-map-stats-head" style="background-color: var(--HD-blue);">
          <p>{{matchData.teams.away.team_name}}</p>
          <p
          v-if="round.map.mode == Gamemode.Payload"
          >{{SecondsToStamp(round.results.away.time)}}</p>
          <p
          v-if="round.map.mode == Gamemode.Payload"
          >{{round.results.away.score / 100.0}}%</p>
          <p
          v-else
          >{{round.results.away.score}}</p>
      </div>
      <table class="match-map-stats-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>kills</th>
            <th>deaths</th>
            <th>kd</th>
            <th>shots</th>
            <th>headshots</th>
            <th>score</th>
            <th
            v-if="round.map.mode == Gamemode.Payload"
            >Time On Cart</th>
            <th
            v-if="round.map.mode == Gamemode.Domination || round.map.mode == Gamemode.ControlPoint"
            >Captures</th>
            <th
            v-if="round.map.mode == Gamemode.Domination"
            >Counters</th>
          </tr>
        </thead>
        <tbody>
          <MapStatBlock
          v-for="stats in round.stats_away"
          :stats="stats"
          :gamemode="round.map.mode"
          />
        </tbody>
      </table>
    </div>
  </div>
  
  
  <br>
  <br>
  
  </div>

    <div v-if="matchData">
        <pre>{{ matchData }}</pre>
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
import { Gamemode, SecondsToStamp } from '@/obj/common.ts';

import MapStatBlock from '../components/MapStatBlock.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import MapStatBlockCondensed from '@/components/MapStatBlockCondensed.vue';
import type { Match } from '@/obj/match.ts';


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
})
</script>