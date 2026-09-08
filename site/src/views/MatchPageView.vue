<template>
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

import MapStatBlock from '../components/MapStatBlock.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import MapStatBlockCondensed from '@/components/MapStatBlockCondensed.vue';


const router = useRouter()
console.log(props.matchID);
const condensed_data = ref(false);
const matchData = ref<any>(null);
onMounted(async () => {
  console.log(props.matchID);

  const data = await get_match(props.matchID);
  
  if (!data){
    router.replace('/404');
  }
  
  matchData.value = data;
})
</script>