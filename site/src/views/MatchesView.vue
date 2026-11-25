<template>
    <div>
        <div class="season-buttons">
            <router-link v-if="seasons" v-for="season in seasons" :to="`/matches/season_${season.season_id}`"
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
        <div class="flex-list">
            <template v-for="cycle in cycles">
                <h1>Cycle {{ cycle.cycle_id }} <span v-if="cycle.playoff">[Playoffs]</span></h1>
                <MatchOverviewCondensed v-if="condensed_data" v-for="item in cycle.matches" :match_id="item.match_id"
                    :match="item"
                    />
                <MatchOverviewFull v-else v-for="item in cycle.matches" :match_id="item.match_id"
                    :match="item"
                    />
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

import MatchOverviewFull from '../components/MatchSimpleItem.vue';
import MatchOverviewCondensed from '../components/MatchSimpleItemCondensed.vue';
import ViewToggle from '../components/DataViewToggle.vue'
import { ref, onMounted, watch } from 'vue';
import { get_matches } from "../api/matches.ts";
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import { get_seasons } from '@/api/misc.ts';
import type { MatchOverview } from '@/obj/match.ts';


const condensed_data = ref(false);

const router = useRouter()
const seasons = ref<Season[] | null>([])
const matchesData = ref<MatchOverview[] | null>([])

const cycles = ref<Cycle[]>([])

const load_data = async () => {
    console.log(props.seasonID);
    document.title = 'Matches'
    const season_data = await get_seasons();

    if (!season_data) {
        router.replace('/404');
    }

    seasons.value = season_data
    const match_data = await get_matches(props.seasonID ?? 11);

    if (!match_data) {
        router.replace('/404');
    }

    matchesData.value = match_data;
    
    cycles.value = [];
    match_data?.forEach(match => {
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
    () => load_data(),
    { immediate: true }
)
</script>
