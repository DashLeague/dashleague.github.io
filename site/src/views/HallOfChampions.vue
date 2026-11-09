<template>
    <section
    v-for="season in champions"
    >
        <h1 class="text-center">Season {{season.season_id}}</h1>
        <div class="champion-podiums">
            <ChampionTeam
            v-if="season.walker"
            :team = season.walker.team
            :players = season.walker.players
            />
            <ChampionTeam
            v-if="season.sprinter"
            :team = season.sprinter.team
            :players = season.sprinter.players
            />
            <ChampionTeam
            v-if="season.dasher"
            :team = season.dasher.team
            :players = season.dasher.players
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { get_hall_of_champions } from "../api/misc.ts";
import { useRouter } from 'vue-router';
import type { SeasonChampions } from '@/obj/misc.ts';
import ChampionTeam from '@/components/ChampionTeam.vue';


const condensed_data = ref(false);

const router = useRouter()
const champions = ref<SeasonChampions[] | null>([])

const load_data = async () => {
    const hall_data = await get_hall_of_champions();

    if (!hall_data) {
        router.replace('/404');
    }

    champions.value = hall_data;
}

onMounted(
    () => load_data()
    )
</script>