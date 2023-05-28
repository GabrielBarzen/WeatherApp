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
    <div class="flex flex-col h-screen">
        <div>
            <Navigation />
        </div>
        <div class="flex-grow">
            <main >
                <router-view :weather="localWeatherData" />
            </main>
        </div>
        <div class="relative">
            <Footer class="h-16 text-xl"/>

        </div>
    </div>
    <ApiTicker  @weather="updateWeather"></ApiTicker>
</template>

<style scoped>
</style>
