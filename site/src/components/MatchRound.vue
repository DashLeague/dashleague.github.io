<template>
    <div class="match-map">
        <div class="match-map-head">
            <span>
                <h1>Map: </h1>
                <h1>{{ MapNames[round.map.name] }}</h1>
            </span>
            <span>
                <h1>Winner:</h1>
                <h1 v-if="round.results.home.winner">{{ teams.home.team_name }}</h1>
                <h1 v-if="round.results.away.winner">{{ teams.away.team_name }}</h1>
            </span>
            <span>
                <h1>Time: </h1>
                <h1>{{ SecondsToStamp(round.time) }}</h1>
            </span>
        </div>
        <div class="match-map-stats">
            <div class="match-map-stats-team">
                <div class="match-map-stats-head" style="background-color: var(--HD-red);">
                    <p>{{teams.home.team_name}}</p>
                    <p
                    v-if="round.map.mode == Gamemode.Payload"
                    >{{SecondsToStamp(round.results.home.time)}}</p>
                    <p
                    v-if="round.map.mode == Gamemode.Payload"
                    >{{round.results.home.score / 100.0}}%</p>
                    <p
                    v-else
                    >{{round.results.home.score}}</p>
                </div>
                <table class="match-map-stats-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th class="short">K</th>
                            <th class="full">Kills</th>
                            <th class="short">D</th>
                            <th class="full">Deaths</th>
                            <th>KD</th>
                            <th>Shots</th>
                            <th>Headshots</th>
                            <th>Score</th>
                            <th v-if="round.map.mode == Gamemode.Payload"
                            >Time On Cart</th>
                            <th v-if="round.map.mode == Gamemode.Domination || round.map.mode == Gamemode.ControlPoint"
                            >Captures</th>
                            <th v-if="round.map.mode == Gamemode.Domination"
                            >Counters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MapStatBlock
                        v-for="stats in round.stats_home"
                        :stats="stats"
                        :gamemode="round.map.mode"
                        />
                    </tbody>
                </table>
            </div>
            <div class="match-map-stats-team">
                <div class="match-map-stats-head" style="background-color: var(--HD-blue);">
                    <p>{{teams.away.team_name}}</p>
                    <p
                    v-if="round.map.mode == Gamemode.Payload"
                    >{{SecondsToStamp(round.results.away.time)}}</p>
                    <p
                    v-if="round.map.mode == Gamemode.Payload"
                    >{{round.results.away.score / 100.0}}%</p>
                    <p
                    v-else
                    >{{round.results.away.score}}</p>
                </div>
                <table class="match-map-stats-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th class="short">K</th>
                            <th class="full">Kills</th>
                            <th class="short">D</th>
                            <th class="full">Deaths</th>
                            <th>KD</th>
                            <th>Shots</th>
                            <th>Headshots</th>
                            <th>Score</th>
                            <th v-if="round.map.mode == Gamemode.Payload"
                            >Time On Cart</th>
                            <th v-if="round.map.mode == Gamemode.Domination || round.map.mode == Gamemode.ControlPoint"
                            >Captures</th>
                            <th v-if="round.map.mode == Gamemode.Domination"
                            >Counters</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MapStatBlock
                        v-for="stats in round.stats_away"
                        :stats="stats"
                        :gamemode="round.map.mode"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Gamemode, MapNames, SecondsToStamp } from '@/obj/common.ts';
import type { Round } from '@/obj/round';
import type { MatchTeams } from '@/obj/team';
import MapStatBlock from './MapStatBlock.vue';

const props = defineProps<{
teams: MatchTeams
round: Round
}>();
</script>