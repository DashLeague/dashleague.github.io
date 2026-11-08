<template>
    <Transition name="fade">
    <button
        v-if="isVisible"
        @click="scrollToTop"
        class="scroll-to-top"
    >
    </button>
    </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

// Show button when user scrolls down more than 300px
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

// Perform smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>