<script setup>
import LeafletMap from '../comp/LeafletMap.vue';

let cords = [59.4154040084724, 24.64667272153351]
</script>
<template>
    <LeafletMap :center="cords"></LeafletMap>
</template>
