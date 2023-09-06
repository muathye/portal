<script setup lang="ts">

interface Props {
    title: string,
    navItems: any[],
}

const props = defineProps<Props>()

</script>
<template>
    <nav class="space-y-6">
    <h2 class="capitalze font-semibold text-heading-1 text-xl">
        {{ props.title }}
    </h2>
    <ul class="space-y-3 font-light md:text-sm text-heading-3">
        <li v-for="(navItem, index) in props.navItems" :index="index" :key="navItem.id">
            <a :href="navItem.itemLink" class="transition hover:text-primary">
                {{ navItem.itemText }}
            </a>
        </li>
    </ul>
</nav>
</template>