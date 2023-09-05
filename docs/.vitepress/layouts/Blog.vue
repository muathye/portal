<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from '../components/Footer.vue'

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
        <template #layout-top></template>
        <template #layout-bottom><Footer /></template>
        <template #nav-bar-title-before></template>
        <template #nav-bar-title-after></template>
        <template #nav-bar-content-before></template>
        <template #nav-bar-content-after></template>
        <template #nav-screen-content-before></template>
        <template #nav-screen-content-after></template>
    </Layout>
</template>
