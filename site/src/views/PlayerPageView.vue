<template>
  <div v-if="playerData">
    <h1>{{ playerData.player_id }}</h1>
    <p>{{ playerData.player_name }}</p>
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
const router = useRouter()


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