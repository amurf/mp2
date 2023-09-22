<script setup>
import { useLocations } from '../locations'
const { isFetching, isLoading, data: locations } = useLocations()
</script>

<template>
  <section style="padding: 2em">
    <h1>
      Location List
      <template v-if="isFetching">(refreshing data)</template>
    </h1>
    <div v-if="isLoading">Loading list data...</div>
    <ul v-else>
      <li v-for="location in locations"
        :key="location.id">
        {{ location.name }}
      </li>
    </ul>
  </section>
</template>
