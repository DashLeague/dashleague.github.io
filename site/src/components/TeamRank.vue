<template>
    <div class="team-rank">
        <router-link
        v-if="season"
        :to="`/team/${team.team_id}/season_${season}`"
        class="team-card"
        v-for="team in teams"
        :style="{
        '--team-color': `#${team.team_color}`
            }"
        >   
            <div class="team-logo small">
                <img :src="`/assets/team_logos/${team.team_id}.png`" width="100%" height="auto" loading="lazy">
            </div>
            <h1>{{ team.team_name }}</h1>
        </router-link>

        <router-link
        v-else
        :to="`/team/${team.team_id}`"
        class="team-card"
        v-for="team in teams"
        :style="{
        '--team-color': `#${team.team_color}`
            }"
        >   
            <div class="team-logo small">
                <img :src="`/assets/team_logos/${team.team_id}.png`" width="100%" height="auto" loading="lazy">
            </div>
            <h1>{{ team.team_name }}</h1>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import type { CondensedTeam } from '@/obj/team';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    teams: CondensedTeam[],
    season?: Number
}>();

</script>