<script setup>
defineProps([paginaiton]);
</script>

<template>
    <div class="button">
        <button class="button is-primary" @click="$emit('prev')" :disabled="!pagination.prev">Previous</button>
        <button class="button is-primary" @click="$emit('next')" :disabled="!pagination.prev">Next</button>
    </div>
</template>