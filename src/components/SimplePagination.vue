<script setup>
defineProps(['pagination']);
</script>

<template>
    <div class="buttons">
        <button class="button is-primary" @click="$emit('prev')" :disabled="!pagination.prev">Previous</button>
        <button class="button is-primary" @click="$emit('next')" :disabled="!pagination.next">Next</button>
    </div>
</template>