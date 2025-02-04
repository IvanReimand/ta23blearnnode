<script setup>
    defineProps(['active', 'url', 'html']);  
</script>

<template>
    <div class="modal" :class="{'is active': active}">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content" v-html="html">
            
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>