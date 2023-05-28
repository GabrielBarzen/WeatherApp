<script setup>
    import { ref } from 'vue'
    import Navigation from "./components/Navigation.vue"
    import Footer from "./components/Footer.vue"
    import ApiTicker from "./components/ApiTicker.vue"

    let stats = {
        "highestTemp" : null,
        "lowestTemp" : null,
        "rainyDays" : null,
        "snowyDays" : null
    };

    if (localStorage["stats"] == null) {
        localStorage["stats"] = JSON.stringify(stats);
    }

    if (localStorage["tempUnit"] == null) {
        localStorage["tempUnit"] = "C";
    }

    if (localStorage["weatherHistory"] == null) {
        localStorage["weatherHistory"] = "";
    } 
    
    function updateWeather(data) {
        console.log("UPDATING WEATHER");
        weatherData.value = data;
    }
    let weatherData = ref({});
</script>

<template>
    <Navigation />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <router-view :weather="weatherData" />
    </main>
    <ApiTicker  @weather="updateWeather"></ApiTicker>
    <Footer class="absolute inset-x-0 bottom-0 h-16" />
</template>

<style scoped>
</style>
