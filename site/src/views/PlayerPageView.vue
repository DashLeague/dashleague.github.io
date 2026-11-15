<template>
  <div
  v-if="playerData">
    <h1>{{ playerData.player.player_name }}</h1>
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
      <router-link v-if="seasons" v-for="season in seasons" :to="`/player/${playerID}/season_${season.season_id}`"
          :class="{ selected: Number(season.season_id) === Number(current_season) }">
          Season {{ season.season_id }}
      </router-link>
  </div>
  <div
  class="flex-list"
  v-if="current_season_data && playerData">
    <h1>Players this season</h1>
    <div class="team-ranks">
      <TeamRank
        :teams="current_season_data.teams"
        :season="seasonID"/>
    </div>
    <h1>Matches</h1>
    <template v-for="cycle in cycles">
        <h1>Cycle {{ cycle.cycle_id }} <span v-if="cycle.playoff">[Playoffs]</span></h1>
        <MatchSimpleItem v-for="item in cycle.matches" :match_id="item.match_id"
            :match="item"
            />
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    playerID: {
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
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import MatchSimpleItem from '@/components/MatchSimpleItem.vue';
import type { PlayerPageData, PlayerSeason } from '@/obj/player.ts';
import { get_player } from '@/api/players.ts';
import TeamRank from '@/components/TeamRank.vue';

const condensed_data = ref(false);

let current_season = ref(-1)

const current_season_data = computed(() =>
  playerData.value?.seasons?.find(
    season => season.season_id === current_season.value
  )
)
const cycles = ref<Cycle[]>([])
const router = useRouter()
const seasons = ref<Season[]>([])
const playerData = ref<PlayerPageData | null>()

const load_data = async () => {
    console.log(props.playerID);
    seasons.value = []
    playerData.value = null

    const team_data = await get_player(props.playerID);

    if (!team_data) {
        router.replace('/404');
    }

    playerData.value = team_data;
    team_data?.seasons.forEach(season => {
      seasons.value.push({
        season_id: season.season_id,
        cycles: []
      })
    });

    playerData.value?.seasons.sort((a:PlayerSeason,b:PlayerSeason) => b.season_id - a.season_id);
    
    update_season();
}

const update_season = async () => {
  if (Number(props.seasonID) == -1){
    current_season.value = seasons.value.at(-1)?.season_id ?? 11
  } else {
    current_season.value = Number(props.seasonID)
  }

  cycles.value = [];
  current_season_data.value?.matches?.forEach(match => {
      const cycle = cycles.value.find(cycle => cycle.cycle_id === match.cycle);
      if (cycle) {
          cycle.matches.push(match)
      } else {
          cycles.value.push({
              cycle_id: match.cycle,
              playoff: match.playoff,
              matches: [match]
          } as Cycle)
      }
  });

  // Sorting cycle so the latest is at the top
  cycles.value.sort((a:Cycle,b:Cycle) => b.cycle_id - a.cycle_id);
}

watch(
    () => props.seasonID,
    () => update_season(),
    { immediate: true }
)
onMounted(() => load_data());
</script>