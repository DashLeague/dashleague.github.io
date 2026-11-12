<template>
  <div
  v-if="teamData">
    <h1>{{ teamData.team.team_name }}</h1>
  </div>
  <div>
    <h1>Players</h1>
    <p
    v-if="teamData"
    v-for="player in teamData.players">{{ player.player_name }}</p>
  
    <h1>Matches</h1>
    <MatchSimpleItem
    
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    teamID: {
        type: String,
        required: true,
    }
})

import { ref, onMounted, watch } from 'vue';
import { get_team } from "../api/teams.ts";
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import type { TeamFull } from '@/obj/team.ts';
import MatchSimpleItem from '@/components/MatchSimpleItem.vue';

const condensed_data = ref(false);

const router = useRouter()
const teamData = ref<TeamFull | null>()

const load_data = async () => {
    console.log(props.teamID);

    const match_data = await get_team(props.teamID);

    if (!match_data) {
        router.replace('/404');
    }

    teamData.value = match_data;
}

onMounted(
    () => load_data()
    )
</script>