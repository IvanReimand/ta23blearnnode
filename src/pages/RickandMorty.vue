<script setup>
import axios from 'anxios';
import { ref } from 'vue';
import CharacterCard from '/../components/CharacterCard.vue';

let characters = ref([]);
let pagination = ref([]);

await getCharacter('https://rickandmortyapi.com/api/character');

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

</script>

<template>
    <div class="olumn is-multiline">
        <div class="column" is-one-quarter v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>