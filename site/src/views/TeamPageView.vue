<template>
  <div
  v-if="teamData">
    <h1>{{ teamData.team.team_name }}</h1>
    <div class="stat-rank">
      <div class="stat-card">
        <h2>Seasons</h2>
        <h3>3</h3>
      </div>
      <div class="stat-card">
        <h2>Players</h2>
        <h3>3</h3>
      </div>
      <div class="stat-card">
        <h2>Matches</h2>
        <h3>3</h3>
      </div>
      <div class="stat-card">
        <h2>Wins</h2>
        <h3>3</h3>
      </div>
    </div>
  </div>

  <div class="season-buttons">
      <router-link v-if="seasons" v-for="season in seasons" :to="`/team/${teamID}/season_${season.season_id}`"
          :class="{ selected: Number(season.season_id) === Number(current_season) }">
          Season {{ season.season_id }}
      </router-link>
  </div>
  <div
  class="flex-list"
  v-if="current_season_data && teamData"
  :style="{
        '--team-color': `#${teamData.team.team_color}`
            }">
    <h1>Players this season</h1>
    <div class="player-rank">
      <router-link
      v-for="player in current_season_data.players"
      :class="{'player-card':true}"
      :to="`/player/${player.player_id}/season_${current_season}`"
      >
      <img src="/assets/robots/crossedarms/blue/helmet_0/pistol/pistol_pistol.png" alt="" height="72px">
      <h3>{{ player.player_name }}</h3>
    </router-link>
    </div>
    <h1>Matches</h1>
    <MatchSimpleItem
    v-for="match in current_season_data.matches"
    :match=match
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    teamID: {
        type: String,
        required: true,
    },
    seasonID: {
        type: Number,
        required: false,
        default: -1,
    }
})

import { ref, onMounted, watch, computed } from 'vue';
import { get_team } from "../api/teams.ts";
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import type { TeamPageData, TeamSeason } from '@/obj/team.ts';
import MatchSimpleItem from '@/components/MatchSimpleItem.vue';

const condensed_data = ref(false);

let current_season = ref(-1)
// let current_season_data: TeamSeason | null = null
const current_season_data = computed(() =>
  teamData.value?.seasons?.find(
    season => season.season_id === current_season.value
  )
)
const router = useRouter()
const seasons = ref<Season[]>([])
const teamData = ref<TeamPageData | null>()

const load_data = async () => {
    console.log(props.teamID);
    seasons.value = []
    teamData.value = null

    const team_data = await get_team(props.teamID);

    if (!team_data) {
        router.replace('/404');
    }

    teamData.value = team_data;
    team_data?.seasons.forEach(season => {
      seasons.value.push({
        season_id: season.season_id,
        cycles: []
      })
    });

    teamData.value?.seasons.sort((a:TeamSeason,b:TeamSeason) => b.season_id - a.season_id);
    
    update_season();
}

const update_season = async () => {
  if (Number(props.seasonID) == -1){
    current_season.value = seasons.value.at(-1)?.season_id ?? 11
  } else {
    current_season.value = Number(props.seasonID)
  }
}

watch(
    () => props.seasonID,
    () => update_season(),
    { immediate: true }
)
onMounted(() => load_data());
</script>