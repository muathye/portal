<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
const hostname = process.env.APP_URL

</script>
<template>
    <footer data-v-80147a0d="" data-v-8f7cd5e4="" class="VPFooter">
        <div data-v-80147a0d="" class="container"><!--v-if-->
            <p data-v-80147a0d="" class="copyright">Copyright © 2022-{{ currentYear }} | <a href="{{hostname}}">Muath Alsowadi</a></p>
        </div>
    </footer>
</template>