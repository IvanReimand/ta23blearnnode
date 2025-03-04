<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import PagedPagination from '../components/PagedPagination.vue';

let characters = ref([]);
let pagination = ref({});
letcurrentPage = ref(1);
await page(currentPage.value);

async function getCharacter(url) {
    let response = await axios.get(url);
    console.log(response.data);
    characters.value = response.data.results;
    pagination.value = response.data.info;
}

async function next(){
    await getCharacters(pagination.value.next);
}

async function prev(){
    await getCharacter(pagination.value.prev)
}

async function page(){
    await getCharacter('https://rickandmortyapi.com/api/character' + page);
}

</script>

<template>
    <PagedPagination :pagination="pagination" :current="currentPage" @next="next" @prev="prev"></PagedPagination>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>