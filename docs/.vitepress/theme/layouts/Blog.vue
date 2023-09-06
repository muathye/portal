<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from '../elements/Footer.vue'

const { Layout } = DefaultTheme

</script>

<template>
    <!-- https://vitepress.dev/guide/extending-default-theme -->
    <!-- 
        You can use frontmatter as following example to get og:image content
        {{ $frontmatter.head[5][1].content }}
     -->
    <Layout>
        <!-- layout:doc -->
        <template #doc-top></template>
        <template #doc-bottom></template>
        <template #doc-footer-before></template>
        <template #doc-before></template>
        <template #doc-after></template>
        <template #sidebar-nav-before></template>
        <template #sidebar-nav-after></template>
        <template #aside-top></template>
        <template #aside-bottom></template>
        <template #aside-outline-before></template>
        <template #aside-outline-after></template>
        <template #aside-ads-before></template>
        <template #aside-ads-after></template>
        <!-- layout:home -->
        <template #home-hero-before></template>
        <template #home-hero-info></template>
        <template #home-hero-image></template>
        <template #home-hero-after></template>
        <template #home-features-before></template>
        <template #home-features-after></template>
        <!-- layout:page -->
        <template #page-top></template>
        <template #page-bottom></template>
        <!-- 404 -->
        <template #not-found></template>
        <!-- always -->
        <template #layout-top>
            <div class="absolute right-0 top-0 h-full w-full flex justify-end">
                <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                    <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                    <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                    <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
                </div>
            </div>

            <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
                <div class="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                    <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span>
                    <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span>
                    <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span>
                </div>
            </div>
        </template>
        <template #layout-bottom><Footer /></template>
        <template #nav-bar-title-before></template>
        <template #nav-bar-title-after></template>
        <template #nav-bar-content-before></template>
        <template #nav-bar-content-after></template>
        <template #nav-screen-content-before></template>
        <template #nav-screen-content-after></template>
    </Layout>
</template>
