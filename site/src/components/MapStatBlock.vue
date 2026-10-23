<template>
  <tr>
      <td>{{ stats.player_name }}</td>
      <td>{{ stats.kills}}</td>
      <!-- <td>{{ stats.kills_per_minute}}</td> -->
      <td>{{ stats.deaths}}</td>
      <!-- <td>{{ stats.deaths_per_minute}}</td> -->
      <td>{{ stats.kd}}</td>
      <!-- <td>{{ stats.playtime}}</td> -->
      <!-- <td>{{ stats.shots}}</td> -->
      <!-- <td>{{ stats.shots_hit}}</td> -->
      <td>{{ stats.accuracy}}</td>
      <!-- <td>{{ stats.damage}}</td> -->
      <td>{{ stats.headshots}}</td>
      <td>{{ stats.score}}</td>
      <!-- <td>{{ stats.score_per_minute}}</td> -->
      <td v-if="gamemode === Gamemode.Payload">
        {{ stats.payload_push_time}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="gamemode === Gamemode.Domination">
        {{ stats.domination_captures}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="gamemode === Gamemode.Domination">
        {{ stats.domination_counters}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="gamemode === Gamemode.ControlPoint">
        {{ stats.control_point_captures}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="gamemode === Gamemode.Domination || gamemode === Gamemode.ControlPoint">
        {{ stats.terminal_interactions}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="gamemode === Gamemode.Domination || gamemode === Gamemode.ControlPoint">
        {{ stats.terminal_interactions_per_minute}}
      </td>
      <td v-else-if=show_null_values> NA </td>
  </tr>
</template>

<script setup lang="ts">
import type { RoundStats } from '@/obj/stats.ts';
import { Gamemode } from '@/obj/common.ts';
const props = defineProps<{
  stats: RoundStats,
  gamemode: Gamemode,
  show_null_values?: Boolean
}>();

</script>