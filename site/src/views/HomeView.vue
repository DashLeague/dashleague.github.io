<template>
    <header class="hero">
        <div class="hero-video">
            <video
            src="/assets/dl_logo_glitch.mp4"
            autoplay
            muted
            loop
            aria-label="Dash League glitch logo"
            ></video>
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <h1 class="hero-title">Dash League Archive</h1>
            <p class="hero-text">A Tribute to the mighty and fallen</p>
        </div>
        <div class="hero-quicklinks">
            <router-link to="/matches">
                <img src="/assets/matches.svg" alt="" height="64px" class="icon-white">
                Matches
            </router-link>
            <router-link to="/teams">
                <img src="/assets/team.svg" alt="" height="64px">
                Teams
            </router-link>
            <router-link to="/players">
                <img src="/assets/player.svg" alt="" height="64px">
                Players
            </router-link>
            <router-link to="/hall-of-champions">
                <img src="/assets/champions.svg" alt="" height="64px">
                Hall Of Champions
            </router-link>
        </div>
        <p class="hero-footer">&#9660; Scroll to learn more &#9660;</p>
    </header>
    
    <section>
        <h1 class="text-center">Welcome to the Dash Legaue archive</h1>
        <h3 class="text-center">This site serves as a memorial to the dash league and its history</h3>
    </section>
    
    <section>
        <h1 class="text-center">Open Source</h1>
        <h3 class="text-center">This site is also open source on Github under the BSD-3-Clause license</h3>
        <br>
        <div class="open-source-row">
            <a
            class="card"
            href="https://github.com/DashLeague/dashleague.github.io">
                <img src="/assets/GitHub_Invertocat_Black.svg" alt="" height="256px">
                <h3>View the source code on Github</h3>
            </a>
            <div class="card">
                <img src="/assets/no-AI.svg" alt="" height="256px">
                <h3>This project used No AI in its making</h3>
            </div>
            <a
            class="card"
            href="https://opensource.org/license/bsd-3-clause">
                <img src="/assets/Open_Source_Initiative.svg" alt="" height="256px">
                <h3>BSD-3-Clause License</h3>
            </a>
        </div>
    </section>

    <section>
        <h1 class="text-center">Thank you wall</h1>
        <h2 class="text-center">The league would not have been possible without these people so for that we thank them immensely</h2>
        <br>
        <br>
        <div class="thank-you-wall">
            <ThankYouCard
            v-for="volunteer in volunteers"
            :volunteer="volunteer"/>
        </div>
    </section>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { get_volunteers } from "../api/misc.ts";
import { useRouter } from 'vue-router'
import type { Volunteer } from '@/obj/misc.ts';
import ThankYouCard from '@/components/ThankYouCard.vue';



const router = useRouter()
const condensed_data = ref(false);
const volunteers = ref<Volunteer[] | null>(null);

onMounted(async () => {
    const data = await get_volunteers();
    if (!data){
    router.replace('/404');
    }
    volunteers.value = data;
})
</script>