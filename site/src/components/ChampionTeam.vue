<template>
    <div
    class="champion-team"
    :style="{
        '--team-color': `#${team.team_color}`
    }"
    >
    <br>
        <h1>{{team.team_name}}</h1>
        <div class="team-logo crown">
            <img :src="`/assets/team_logos/${team.team_id}.png`" width="100%" height="auto" loading="lazy">
        </div>
        <div class="player-list">
            <template v-for="player in players" :key="player.player_name">
                <RouterLink
                    v-if="player.player_id"
                    :to="`/player/${player.player_id}`"
                >
                    {{ player.player_name }}
                </RouterLink>

                <span v-else>
                    {{ player.player_name }}
                </span>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PlayerBasic } from '@/obj/player';
import type { CondensedTeam } from '@/obj/team';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    team: CondensedTeam,
    players: PlayerBasic[]
}>();

</script>