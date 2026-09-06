<template>
  <div v-if="playerData">
    <h1>{{ playerData.player_id }}</h1>
    <p>{{ playerData.player_name }}</p>

    <h1>Round Stats</h1>
    <div v-for="season in playerData.seasons">
      <h1>Stats for {{ season.sesaon }}</h1>
      <ViewToggle v-model:condensed="condensed_data" />
      <table>
        <MapStatBlockCondensed
        v-if="condensed_data"
        v-for="round in season.maps"
        :stats=round.stats
        />
        <MapStatBlock
        v-else
        v-for="round in season.maps"
        :stats=round.stats
        />
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  playerID: {
    type: String,
    required: true
  }
})

import { ref, onMounted } from 'vue'
import { get_player } from "../api/players.ts";
import { useRouter } from 'vue-router'

import MapStatBlock from '../components/MapStatBlock.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import MapStatBlockCondensed from '@/components/MapStatBlockCondensed.vue';


const router = useRouter()

const condensed_data = ref(false);
const playerData = ref<any>(null)
onMounted(async () => {
  console.log(props.playerID);

  const data = await get_player(props.playerID);
  
  if (!data){
    router.replace('/404');
  }
  
  playerData.value = data;
})


</script>