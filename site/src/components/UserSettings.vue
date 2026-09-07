<template>
    <div>
        <button
        @click="toggle_menu"
        >Settings</button>
        <div
        class="popup-menu"
        :style="{display: is_open ? 'flex' : 'none'}">
            <label for="theme-selector">Theme:</label>
            <select
            name="theme-selector"
            id="theme-selector"
            @change="set_theme(($event.target as HTMLSelectElement).value)">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="midnight">Midnight</option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// track if the settings menu is open or closed
const is_open = ref(false)
function toggle_menu() {
    is_open.value = !is_open.value;
}

function set_theme(value:string){
    localStorage.setItem("user_theme", value)
    const app_element = document.getElementById("app");
    if (app_element){
        app_element.dataset.theme = value;
    }
}
</script>