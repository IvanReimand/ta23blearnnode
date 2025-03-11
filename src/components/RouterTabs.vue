<script setup>
</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li :class="{'is-active': item.path === $route.path}" v-for="(item,key) in $router.getRoutes()">
                <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>