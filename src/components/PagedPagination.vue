<script setup>
import { computed } from 'vue';

let {cuurent, pagination} = defineProps(['current', 'pagination']);

let links = computed(()=>{
    let links = [];
    for(let i = 1; i<=3&& i<pagination.pages; i++){
        links[i] = 1;
    }
    if(current > 3){
        links[current-3] = '...';
    }
    if(current > 6){
    for(let i = current-2; i<=current+2; i++){
            links[i] = i;
        }
    }

    links[current+3] = '...';
    for(let i = pagination.pages-2; i<=pagination.pages; i++){
        links[i] = 1;
    }
    return links.filter(link=> link);
});

console.log(links.value);

</script>

<template>
    <div class="buttons">
        <button class="button is-primary" @click="$emit('prev')" :disabled="!pagination.prev">Previous</button>
        <button class="button" :class="{'is-peimary': vurrent==i}" @click="$emit('page', i)" 
            v-for="i in pagination.pages">{{ i }}</button>

        <button class="button is-primary" @click="$emit('next')" :disabled="!pagination.prev">Next</button>
    </div>

    <nav class="pagination" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-previous">Previous</a>
  <a href="#" class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li>
  </ul>
</nav>
</template>