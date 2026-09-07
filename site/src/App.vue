<script setup lang="ts"></script>

<template>
  <nav>
    <!-- Renders as <a href="#/"> Home </a> -->
    <router-link to="/">Home</router-link> |
    
    <!-- Renders as <a href="#/about"> About </a> -->
    <router-link to="/matches">Matches</router-link>
  </nav>
  <main class="content">
    <router-view/>
  </main>
</template>