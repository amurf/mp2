<script setup>
import { useLocations } from '../locations'
const { isLoading, data: locations } = useLocations()
</script>

<template>
    <section style="padding: 2em">
        <h1>Location Table</h1>
        <div v-if="isLoading">Loading table data...</div>
        <table v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th style="text-align:left">Name</th>
                </tr>
            </thead>
            <tbody>
                <!-- loop through locations and display ID and Name -->
                <tr v-for="location in locations"
                    :key="location.id">
                    <td>{{ location.id }}</td>
                    <td>{{ location.name }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
