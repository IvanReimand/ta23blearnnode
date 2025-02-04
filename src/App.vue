<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
let modalActive = ref(false);
let modalActive2= ref(false);

</script>
<template>
    <div class='container mt-3'>
        <button class="button is-primary" @click="modalActive=true">Open Modal</button>
        <button class="button is-primary 2" @click="modalActive=true">Open Modal 2</button>
    </div>

        <ImgModal :active="modalActive" @close="modalActive=false" url="">
        </ImgModal>
        
        <Modal :active="modalActive2" @close="modalActive2=false" url="">
            <div class="notification is-link">
                
            </div>
        </Modal>

    
</template>
<style> </style>