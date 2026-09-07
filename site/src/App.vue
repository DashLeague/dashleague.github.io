<script setup lang="ts"></script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    
    <router-link to="/matches">Matches</router-link>
    
    <router-link to="/teams">Teams</router-link>

    <router-link to="/players">Players</router-link>

    <router-link to="/timeline">Timeline</router-link>
  </nav>
  <main class="content">
    <router-view/>
  </main>
  <footer>
    © Dash League and its partners | Code licensed under BSD-3-Clause
  </footer>
</template>