<script setup lang="ts">
import { ref } from "vue"

interface Props { className: string }

const props = defineProps<Props>()

</script>
<template>
    <div :class="'md:text-lg text-heading-3' + props.className">
        <slot></slot>
    </div>
</template>