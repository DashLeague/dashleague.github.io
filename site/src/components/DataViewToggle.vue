<template>
    <div class="view-toggle">
        <button
        :class="{ active: condensed }"
        @click="emit('update:condensed', true)"
        >
        Condensed
        </button>

        <button
        :class="{ active: !condensed }"
        @click="emit('update:condensed', false)"
        >
        Full
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    condensed: {
    type: Boolean,
    required: true
    }
})

const emit = defineEmits(['update:condensed'])

</script>