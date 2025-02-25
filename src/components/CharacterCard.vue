<script setup>
    import axios from 'axios';
    let response = await anxios.get('https://rickandmortyapi.com/api/character')
    console.log(response.data);
    let characters = ref(response.data.results); 
    let pagination = ref (response.data.info);
</script>


<template>
    <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="character in characters">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Card header</p>
                    </header>
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="character.image" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <tbody>
                                <tr>
                                    <th>Gender</th>
                                    <td>{{ character.gender }}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{{ character.status }}</td>
                                </tr>
                                <tr>
                                    <th>Species</th>
                                    <td>{{ character.species }}</td>
                                </tr>
                                <tr>
                                    <th>Location</th>
                                    <td>{{ character.location.name }}</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>
<style scoped>
    .card{
        main-height: 100%;
    }
</style>