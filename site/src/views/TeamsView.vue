<template>
    <div>
        <div class="season-buttons">
            <router-link v-if="seasons" v-for="season in seasons" :to="`/teams/season_${season.season_id}`"
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
    class="team-ranks"
    v-if="teamsData">
        <template
        v-if="teamsData.dasher"
        >
        <h1>Dasher</h1>
        <TeamRank :teams="teamsData.dasher"/>
        </template>

        <template
        v-if="teamsData.sprinter"
        >
        <h1>Sprinter</h1>
        <TeamRank :teams="teamsData.sprinter"/>
        </template>

        <template
        v-if="teamsData.walker"
        >
        <h1>Walker</h1>
        <TeamRank :teams="teamsData.walker"/>
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
import { get_teams } from "../api/teams.ts";
import { useRouter } from 'vue-router';
import type { Cycle, Season } from '@/obj/season.ts';
import { get_seasons } from '@/api/misc.ts';
import type { SeasonTeamList } from '@/obj/team.ts';
import TeamRank from '@/components/TeamRank.vue';

const condensed_data = ref(false);

const router = useRouter()
const seasons = ref<Season[] | null>([])
const teamsData = ref<SeasonTeamList | null>()

const load_data = async () => {
    console.log(props.seasonID);
    const season_data = await get_seasons();

    if (!season_data) {
        router.replace('/404');
    }

    seasons.value = season_data
    const match_data = await get_teams(props.seasonID ?? 11);

    if (!match_data) {
        router.replace('/404');
    }

    teamsData.value = match_data;
}

watch(
    () => props.seasonID,
    () => load_data(),
    { immediate: true }
)

</script>
