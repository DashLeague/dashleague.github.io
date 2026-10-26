<template>
    <div class="thank-you-card">
        <h3>{{ volunteer.username }}</h3>
    </div>
</template>

<script setup lang="ts">
import type { Volunteer } from '@/obj/misc';
const props = defineProps<{
    volunteer: Volunteer,
}>();

</script>