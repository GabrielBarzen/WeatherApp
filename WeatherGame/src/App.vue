<script setup>
    import Navigation from "./components/Navigation.vue"
    import Footer from "./components/Footer.vue"
    import ApiTicker from "./components/ApiTicker.vue"
</script>

<template>
    <Navigation />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <p>Vue is running</p>
        <router-view />
    </main>
    <Footer class="absolute inset-x-0 bottom-0 h-16" />
</template>

<style scoped>
</style>
