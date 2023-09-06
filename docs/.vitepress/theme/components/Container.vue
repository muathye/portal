<script setup lang="ts">
import { ref } from "vue"

interface Props { className: string }

const props = defineProps<Props>()
</script>
<template>
    <div :class="'mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5' + props.className">
        <slot></slot>
    </div>
</template>