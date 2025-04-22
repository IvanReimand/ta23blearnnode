<script setup>
import L from 'leaflet';
console.log()

var map = L.map
L.titleLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}) .addTo(map);
</script>
<template>
    <div id="map"></div>
</template>
