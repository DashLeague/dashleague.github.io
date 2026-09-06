<template>
  <tr>
      <td>{{ stats.kills}}</td>
      <td>{{ stats.deaths}}</td>
      <td>{{ stats.kd}}</td>
      <td>{{ stats.shots}}</td>
      <td>{{ stats.shots_hit}}</td>
      <td>{{ stats.accuracy}}</td>
      <td>{{ stats.damage}}</td>
      <td>{{ stats.headshots}}</td>
      <td>{{ stats.score}}</td>
      <td v-if="stats.gamemode === Gamemode.Payload">
        {{ stats.payload_push_time}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="stats.gamemode === Gamemode.Domination">
        {{ stats.domination_captures}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="stats.gamemode === Gamemode.Domination">
        {{ stats.domination_counters}}
      </td>
      <td v-else-if=show_null_values> NA </td>
      <td v-if="stats.gamemode === Gamemode.ControlPoint">
        {{ stats.control_point_captures}}
      </td>
      <td v-else-if=show_null_values> NA </td>
  </tr>
</template>

<script setup lang="ts">
import { Gamemode, type RoundStats } from '../obj/stats.ts';

const props = defineProps<{
  stats: RoundStats,
  show_null_values?: Boolean
}>();

</script>