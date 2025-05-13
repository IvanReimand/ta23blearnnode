<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();
console.log(router.getRoutes(), route);
</script>
<template>
    <div class="tabs is-toggle is-toggle-rounded is-centered">
  <ul>
    <li :class="{'is-active': item.path === $route.path}" v-for="(item, key) in $router.getRoutes()">
      <RouterLink :to="item.path">
        <span class="icon is-small"><i class="fas fa-image"> {{ item.name }} </i></span>
      </RouterLink>
    </li>
  </ul>
</div>
</template>
