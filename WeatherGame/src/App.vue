<script setup>
    import { ref } from 'vue'
    import Navigation from "./components/Navigation.vue"
    import Footer from "./components/Footer.vue"
    import ApiTicker from "./components/ApiTicker.vue"


    
    function updateWeather(weatherData) {
        console.log("UPDATING WEATHER");
        localWeatherData.value = weatherData;
        storeWeatherData(weatherData);
    }
    function storeWeatherData(weatherData) {
        let localStorageHistory = {};

        if (localStorage.getItem("weatherHistory") != null) {
            localStorageHistory = JSON.parse(localStorage.getItem("weatherHistory"));
        }
        
        localStorageHistory[weatherData.time] = weatherData;
        localStorage.setItem("weatherHistory",JSON.stringify(localStorageHistory));
        localStorage.setItem("stats",JSON.stringify(weatherData));
    }
    let localWeatherData = ref({});
</script>

<template>
    <Navigation />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <router-view :weather="localWeatherData" />
    </main>
    <ApiTicker  @weather="updateWeather"></ApiTicker>
    <Footer class="absolute inset-x-0 bottom-0 h-16" />
</template>

<style scoped>
</style>
