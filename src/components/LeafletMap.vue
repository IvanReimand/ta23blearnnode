<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, useId } from 'vue';

let { center } = defineProps(['center'])

let id = 'map-' + useId();

onMounted(() => {
    console.log(document.getElementById(id));

    var map = L.map(id).setView(center, 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});

</script>
<template>
<div :id="id"></div>
</template>
<style scoped>
    
div { 
    height: 40vh; 
    }

</style>
