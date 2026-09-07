<template>
  <div>
    <ViewToggle v-model:condensed="condensed_data" />
    <div class="flex-list">
    <MatchOverviewCondensed
      v-if="condensed_data"
      v-for="item in matchesData"
      :match_id="item.match_id"
      :match_timestamp = "item.match_timestamp"
      :season = "item.season"
      :cycle = "item.cycle"
      :forfeit = "item.forfeit"
      :playoff = "item.playoff"
      :team_home_id="item.home_team.team_id"
      :team_home_name="item.home_team.team_name"
      :team_home_score="item.home_team.score"
      :team_away_id="item.away_team.team_id"
      :team_away_name="item.away_team.team_name"
      :team_away_score="item.away_team.score"
    />
    <MatchOverview
      v-else
      v-for="item in matchesData"
      :match_id="item.match_id"
      :match_timestamp = "item.match_timestamp"
      :season = "item.season"
      :cycle = "item.cycle"
      :forfeit = "item.forfeit"
      :playoff = "item.playoff"
      :team_home_id="item.home_team.team_id"
      :team_home_name="item.home_team.team_name"
      :team_home_score="item.home_team.score"
      :team_away_id="item.away_team.team_id"
      :team_away_name="item.away_team.team_name"
      :team_away_score="item.away_team.score"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  seasonID: {
    type: Number,
    required: false
  }
})

import MatchOverview from '../components/MatchSimpleItem.vue';
import MatchOverviewCondensed from '../components/MatchSimpleItemCondensed.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import { ref, onMounted } from 'vue';
import { get_matches } from "../api/matches.ts";
import { useRouter } from 'vue-router';


const condensed_data = ref(false);

const router = useRouter()
const matchesData = ref<any>(null)
onMounted(async () => {
  console.log(props.seasonID);

  const data = await get_matches(props.seasonID ?? 11);
  
  if (!data){
    router.replace('/404');
  }
  
  matchesData.value = data;
})
</script>
