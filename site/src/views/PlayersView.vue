<template>
    <div>
        <div class="season-buttons">
            <router-link v-if="seasons" v-for="season in seasons" :to="`/players/season_${season.season_id}`"
                :class="{ selected: Number(seasonID) === season.season_id }">
                Season {{ season.season_id }}
            </router-link>
        </div>
        <br>
        <br>
        <!-- TODO: add condensed data toggle -->
        <!-- <div class="toolbar">
      <ViewToggle v-model:condensed="condensed_data" />
    </div> -->
    <div 
    v-if="playersData"
    class="flex-list">
        <template
        v-for="player in playersData"
        >
            <div>
                {{ player.player_name }}
            </div>
        </template>
    </div>
        <br>
        <br>
        <br>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    seasonID: {
        type: Number,
        required: false,
        default: 11,
    }
})

import ViewToggle from '../components/DataViewToggle.vue'
import { ref, onMounted, watch } from 'vue';
import { get_players } from "../api/players.ts";
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import { get_seasons } from '@/api/misc.ts';
import type { PlayerBasic } from '@/obj/player.ts';

const condensed_data = ref(false);

const router = useRouter()
const seasons = ref<Season[] | null>([])
const playersData = ref<PlayerBasic[] | null>([])

const load_data = async () => {
    console.log(props.seasonID);
    const season_data = await get_seasons();

    if (!season_data) {
        router.replace('/404');
    }

    seasons.value = season_data
    const match_data = await get_players(props.seasonID ?? 11);

    if (!match_data) {
        router.replace('/404');
    }

    playersData.value = match_data;
}

watch(
    () => props.seasonID,
    () => load_data(),
    { immediate: true }
)

</script>
