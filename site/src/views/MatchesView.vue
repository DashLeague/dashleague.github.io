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
                    :match_timestamp="item.match_timestamp" :season="item.season" :cycle="item.cycle"
                    :forfeit="item.forfeit" :playoff="item.playoff" :team_home_id="item.teams.home.team_id"
                    :team_home_name="item.teams.home.team_name" :team_home_score="item.teams.home.score"
                    :team_home_winner="item.teams.home.winner" :team_home_color="item.teams.home.team_color"
                    :team_away_id="item.teams.away.team_id" :team_away_name="item.teams.away.team_name"
                    :team_away_score="item.teams.away.score" :team_away_winner="item.teams.away.winner"
                    :team_away_color="item.teams.away.team_color"
                    :match_vod_link="item.metadata.vod_link"
                    />
                <MatchOverviewFull v-else v-for="item in cycle.matches" :match_id="item.match_id"
                    :match_timestamp="item.match_timestamp" :season="item.season" :cycle="item.cycle"
                    :forfeit="item.forfeit" :playoff="item.playoff" :team_home_id="item.teams.home.team_id"
                    :team_home_name="item.teams.home.team_name" :team_home_score="item.teams.home.score"
                    :team_home_winner="item.teams.home.winner" :team_home_color="item.teams.home.team_color"
                    :team_away_id="item.teams.away.team_id" :team_away_name="item.teams.away.team_name"
                    :team_away_score="item.teams.away.score" :team_away_winner="item.teams.away.winner"
                    :team_away_color="item.teams.away.team_color"
                    :match_vod_link="item.metadata.vod_link"
                    />
            </template>
        </div>
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
